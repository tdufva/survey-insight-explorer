(function () {
  const data = window.SURVEY_DASHBOARD_DATA;
  const mapMarkup = window.US_MAP_SVG;

  if (!data || !mapMarkup) {
    return;
  }

  const allRespondents = data.respondents || [];
  const metricById = new Map(data.metricCatalog.map((metric) => [metric.id, metric]));
  const themeById = new Map(data.themeCatalog.map((theme) => [theme.id, theme]));
  const textQuestionById = new Map(data.textQuestionCatalog.map((question) => [question.id, question]));
  const compareGroupById = new Map(data.compareGroups.map((group) => [group.id, group]));
  const validTabs = new Set(["highlights", "compare", "evidence", "map"]);
  const validMapStyles = new Set(["towers", "filled"]);
  const qualityGuidance = data.qualityGuidance || {
    general: { displayMinimum: 2, directionalMinimum: 8, strongMinimum: 18 },
    compare: { displayMinimum: 2, directionalMinimum: 8, strongMinimum: 15 },
    state: { displayMinimum: 2, directionalMinimum: 4, strongMinimum: 8 },
    text: { displayMinimum: 2, directionalMinimum: 5, strongMinimum: 10 },
  };
  const scoreMethodology = data.scoreMethodology || [];

  const defaultState = {
    tab: validTabs.has(data.defaults.tab) ? data.defaults.tab : "highlights",
    focusState: "all",
    schoolType: "all",
    teachingBand: "all",
    experienceBand: "all",
    mediaArtsBackground: "all",
    compareMetric: data.defaults.compareMetric,
    compareGroup: data.defaults.compareGroup,
    mapMetric: data.defaults.mapMetric,
    mapStyle: "filled",
    textQuestion: data.defaults.textQuestion,
    selectedTheme: data.defaults.theme,
  };
  const state = { ...defaultState };

  const dom = {
    appTitle: document.getElementById("app-title"),
    appSubtitle: document.getElementById("app-subtitle"),
    heroRespondents: document.getElementById("hero-respondents"),
    heroStates: document.getElementById("hero-states"),
    heroWindow: document.getElementById("hero-window"),
    shareViewButton: document.getElementById("share-view-button"),
    installAppButton: document.getElementById("install-app-button"),
    shareStatus: document.getElementById("share-status"),
    focusStateSelect: document.getElementById("focus-state-select"),
    schoolTypeSelect: document.getElementById("school-type-select"),
    teachingBandSelect: document.getElementById("teaching-band-select"),
    experienceSelect: document.getElementById("experience-select"),
    backgroundSelect: document.getElementById("background-select"),
    clearFiltersButton: document.getElementById("clear-filters-button"),
    clearStateFocusButton: document.getElementById("clear-state-focus-button"),
    filterSummary: document.getElementById("filter-summary"),
    methodNote: document.getElementById("method-note"),
    activeFilterChips: document.getElementById("active-filter-chips"),
    cohortTitle: document.getElementById("cohort-title"),
    cohortDescription: document.getElementById("cohort-description"),
    cohortRespondents: document.getElementById("cohort-respondents"),
    cohortStates: document.getElementById("cohort-states"),
    cohortText: document.getElementById("cohort-text"),
    storyLensSummary: document.getElementById("story-lens-summary"),
    transparencySummary: document.getElementById("transparency-summary"),
    transparencyList: document.getElementById("transparency-list"),
    content: document.querySelector(".content"),
    tabButtons: Array.from(document.querySelectorAll(".tab-button")),
    tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
    featuredFinding: document.getElementById("featured-finding"),
    highlightsCards: document.getElementById("highlights-cards"),
    highlightsMetricBars: document.getElementById("highlights-metric-bars"),
    highlightsSummary: document.getElementById("highlights-summary"),
    findingList: document.getElementById("finding-list"),
    routeSummary: document.getElementById("route-summary"),
    routeList: document.getElementById("route-list"),
    qualitySummary: document.getElementById("quality-summary"),
    methodologyList: document.getElementById("methodology-list"),
    compareMetricSelect: document.getElementById("compare-metric-select"),
    compareGroupSelect: document.getElementById("compare-group-select"),
    compareSummary: document.getElementById("compare-summary"),
    compareTakeaway: document.getElementById("compare-takeaway"),
    compareDeltaSummary: document.getElementById("compare-delta-summary"),
    compareBarList: document.getElementById("compare-bar-list"),
    compareScoreSummary: document.getElementById("compare-score-summary"),
    compareScoreChart: document.getElementById("compare-score-chart"),
    compareHighlightList: document.getElementById("compare-highlight-list"),
    textQuestionSelect: document.getElementById("text-question-select"),
    themeSelect: document.getElementById("theme-select"),
    evidenceSummary: document.getElementById("evidence-summary"),
    themeCards: document.getElementById("theme-cards"),
    stanceList: document.getElementById("stance-list"),
    themeBarList: document.getElementById("theme-bar-list"),
    quoteList: document.getElementById("quote-list"),
    challengeList: document.getElementById("challenge-list"),
    resourceList: document.getElementById("resource-list"),
    evidenceFindingSummary: document.getElementById("evidence-finding-summary"),
    evidenceFindingList: document.getElementById("evidence-finding-list"),
    mapMetricSelect: document.getElementById("map-metric-select"),
    mapStyleSelect: document.getElementById("map-style-select"),
    mapSummary: document.getElementById("map-summary"),
    mapStage: document.getElementById("map-stage"),
    mapRoot: document.getElementById("map-root"),
    mapTooltip: document.getElementById("map-tooltip"),
    legendMin: document.getElementById("legend-min"),
    legendMax: document.getElementById("legend-max"),
    legendCaption: document.getElementById("legend-caption"),
    mapFocusTitle: document.getElementById("map-focus-title"),
    mapFocusCopy: document.getElementById("map-focus-copy"),
    mapFocusCards: document.getElementById("map-focus-cards"),
    mapDeltaSummary: document.getElementById("map-delta-summary"),
    mapDeltaChart: document.getElementById("map-delta-chart"),
    mapRankingList: document.getElementById("map-ranking-list"),
    footerNote: document.getElementById("footer-note"),
  };

  const statePaths = new Map();
  let latestStateMetrics = [];
  let deferredInstallPrompt = null;

  function init() {
    applyStateFromUrl();
    dom.appTitle.textContent = data.title;
    dom.appSubtitle.textContent = data.subtitle;
    dom.heroRespondents.textContent = formatInteger(data.respondentCount);
    dom.heroStates.textContent = formatInteger(data.statesRepresented);
    dom.heroWindow.textContent = formatWindow(data.surveyWindow);
    dom.methodNote.textContent = data.methodNote;
    dom.footerNote.textContent =
      `Built from ${data.sourceWorkbook} and ${data.sourceReport}. The map base is a CC0 blank U.S. SVG, and the explorer keeps derived scores and coded themes labeled as interpretation rather than raw fact.`;

    renderMapShell();
    populateStaticControls();
    bindEvents();
    setShareStatus(
      "Share links reopen the same tab, filters, and selected state so collaborators see the same evidence.",
    );
    setupInstallExperience();
    registerServiceWorker();
    renderAll();
  }

  function populateStaticControls() {
    const stateOptions = Object.entries(data.stateCoverage)
      .sort((left, right) => (data.stateNames[left[0]] || left[0]).localeCompare(data.stateNames[right[0]] || right[0]))
      .map(
        ([stateAbbr, count]) =>
          `<option value="${escapeAttribute(stateAbbr)}">${escapeHtml(`${data.stateNames[stateAbbr]} (${count})`)}</option>`,
      );

    dom.focusStateSelect.innerHTML =
      '<option value="all">All states (compare nationally)</option>' + stateOptions.join("");

    populateFilterSelect(dom.schoolTypeSelect, data.filterCatalog.schoolType, "All school types");
    populateFilterSelect(dom.teachingBandSelect, data.filterCatalog.teachingBand, "All teaching bands");
    populateFilterSelect(dom.experienceSelect, data.filterCatalog.experienceBand, "All experience bands");
    populateFilterSelect(dom.backgroundSelect, data.filterCatalog.mediaArtsBackground, "Any media arts background");

    const metricOptions = data.metricCatalog
      .map(
        (metric) =>
          `<option value="${escapeAttribute(metric.id)}">${escapeHtml(metric.label)}</option>`,
      )
      .join("");
    dom.compareMetricSelect.innerHTML = metricOptions;
    dom.mapMetricSelect.innerHTML = metricOptions;
    dom.mapStyleSelect.innerHTML = [
      '<option value="filled">Filled states (recommended)</option>',
      '<option value="towers">3D state skyline</option>',
    ].join("");

    dom.compareGroupSelect.innerHTML = data.compareGroups
      .map(
        (group) =>
          `<option value="${escapeAttribute(group.id)}">${escapeHtml(group.label)}</option>`,
      )
      .join("");

    dom.textQuestionSelect.innerHTML = data.textQuestionCatalog
      .map(
        (question) =>
          `<option value="${escapeAttribute(question.id)}">${escapeHtml(question.label)}</option>`,
      )
      .join("");
    refreshThemeOptions();

    syncControls();
  }

  function populateFilterSelect(selectNode, values, label) {
    selectNode.innerHTML =
      `<option value="all">${escapeHtml(label)}</option>` +
      values
        .map(
          (value) =>
            `<option value="${escapeAttribute(value)}">${escapeHtml(value)}</option>`,
        )
        .join("");
  }

  function refreshThemeOptions() {
    const distribution = getThemeDistribution(allRespondents, state.textQuestion);
    const themeIds = distribution.items.length
      ? distribution.items.map((item) => item.themeId)
      : data.themeCatalog.map((theme) => theme.id);

    dom.themeSelect.innerHTML = themeIds
      .map((themeId) => {
        const theme = themeById.get(themeId);
        if (!theme) {
          return "";
        }
        return `<option value="${escapeAttribute(theme.id)}">${escapeHtml(theme.label)}</option>`;
      })
      .join("");
  }

  function applyStateFromUrl() {
    if (typeof window === "undefined" || !window.location) {
      return;
    }

    const params = new URLSearchParams(window.location.search || "");
    const tab = params.get("view");
    const focusState = params.get("focus");
    const schoolType = params.get("schoolType");
    const teachingBand = params.get("teachingBand");
    const experienceBand = params.get("experience");
    const mediaArtsBackground = params.get("background");
    const compareMetric = params.get("compareMetric");
    const compareGroup = params.get("compareGroup");
    const mapMetric = params.get("mapMetric");
    const mapStyle = params.get("mapStyle");
    const textQuestion = params.get("question");
    const selectedTheme = params.get("theme");

    if (tab && validTabs.has(tab)) {
      state.tab = tab;
    }
    if (isValidStateFocus(focusState)) {
      state.focusState = focusState;
    }
    if (isValidFilterValue("schoolType", schoolType)) {
      state.schoolType = schoolType;
    }
    if (isValidFilterValue("teachingBand", teachingBand)) {
      state.teachingBand = teachingBand;
    }
    if (isValidFilterValue("experienceBand", experienceBand)) {
      state.experienceBand = experienceBand;
    }
    if (isValidFilterValue("mediaArtsBackground", mediaArtsBackground)) {
      state.mediaArtsBackground = mediaArtsBackground;
    }
    if (compareMetric && metricById.has(compareMetric)) {
      state.compareMetric = compareMetric;
    }
    if (compareGroup && compareGroupById.has(compareGroup)) {
      state.compareGroup = compareGroup;
    }
    if (mapMetric && metricById.has(mapMetric)) {
      state.mapMetric = mapMetric;
    }
    if (mapStyle && validMapStyles.has(mapStyle)) {
      state.mapStyle = mapStyle;
    }
    if (textQuestion && textQuestionById.has(textQuestion)) {
      state.textQuestion = textQuestion;
    }
    if (selectedTheme && themeById.has(selectedTheme)) {
      state.selectedTheme = selectedTheme;
    }
  }

  function isValidStateFocus(value) {
    return value === "all" || Boolean(value && data.stateNames[value]);
  }

  function isValidFilterValue(catalogKey, value) {
    return value === "all" || Boolean(value && data.filterCatalog[catalogKey].includes(value));
  }

  function setShareStatus(message, tone) {
    if (!dom.shareStatus) {
      return;
    }
    dom.shareStatus.textContent = message;
    if (tone) {
      dom.shareStatus.dataset.tone = tone;
      return;
    }
    delete dom.shareStatus.dataset.tone;
  }

  function setupInstallExperience() {
    updateInstallButtonVisibility();
    if (typeof window === "undefined" || typeof window.addEventListener !== "function") {
      return;
    }

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      updateInstallButtonVisibility();
      setShareStatus("Install is available. Save the explorer to your device for a cleaner app experience.");
    });

    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      updateInstallButtonVisibility();
      setShareStatus("App installed. You can now launch the survey explorer from your home screen or desktop.", "success");
    });
  }

  function updateInstallButtonVisibility() {
    if (!dom.installAppButton) {
      return;
    }
    dom.installAppButton.hidden = !deferredInstallPrompt || isStandaloneMode();
  }

  function isStandaloneMode() {
    if (typeof window === "undefined") {
      return false;
    }
    const standaloneMedia = typeof window.matchMedia === "function"
      ? window.matchMedia("(display-mode: standalone)").matches
      : false;
    const standaloneNavigator = typeof navigator !== "undefined" && Boolean(navigator.standalone);
    return standaloneMedia || standaloneNavigator;
  }

  function registerServiceWorker() {
    if (typeof window === "undefined" || typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    window.addEventListener(
      "load",
      () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
      },
      { once: true },
    );
  }

  async function handleShareView() {
    const shareUrl = buildShareUrl();
    if (!shareUrl) {
      setShareStatus("The current view could not be turned into a share link in this environment.", "warning");
      return;
    }

    const shareText = buildShareText();
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: data.title,
          text: shareText,
          url: shareUrl,
        });
        setShareStatus("Share sheet opened for this exact view.", "success");
        return;
      } catch (error) {
        if (error && error.name === "AbortError") {
          setShareStatus("Share cancelled. The address bar still contains the exact link for this view.");
          return;
        }
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus("Link copied. Anyone opening it will land on this same filtered view.", "success");
        return;
      } catch (error) {
        // Fall through to the address bar guidance below.
      }
    }

    setShareStatus(
      "The current address bar URL now matches this view. Copy it from there to share the exact same cohort and tab.",
      "warning",
    );
  }

  async function handleInstallApp() {
    if (!deferredInstallPrompt) {
      setShareStatus("Install is not currently available in this browser. You can still share the app by link.");
      return;
    }

    try {
      await deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === "accepted") {
        setShareStatus("Install accepted. Your browser should finish adding the app shortly.", "success");
      } else {
        setShareStatus("Install dismissed. The share link remains available whenever you need it.");
      }
    } catch (error) {
      setShareStatus("The install prompt could not be opened here. The shareable web app link still works.", "warning");
    } finally {
      deferredInstallPrompt = null;
      updateInstallButtonVisibility();
    }
  }

  function buildShareText() {
    const activeLabels = getActiveFilterLabels();
    const scopeLabel = activeLabels.length ? activeLabels.join(" / ") : "all mapped respondents";
    const question = textQuestionById.get(state.textQuestion);
    return `Open the ${state.tab} view for ${scopeLabel} on ${question ? `"${question.label}"` : "the current story lens"} in the survey insight explorer.`;
  }

  function buildShareUrl() {
    if (typeof window === "undefined" || !window.location || !window.location.href) {
      return "";
    }

    const url = new URL(window.location.href);
    const params = new URLSearchParams();

    maybeSetSearchParam(params, "view", state.tab, defaultState.tab);
    maybeSetSearchParam(params, "focus", state.focusState, defaultState.focusState);
    maybeSetSearchParam(params, "schoolType", state.schoolType, defaultState.schoolType);
    maybeSetSearchParam(params, "teachingBand", state.teachingBand, defaultState.teachingBand);
    maybeSetSearchParam(params, "experience", state.experienceBand, defaultState.experienceBand);
    maybeSetSearchParam(params, "background", state.mediaArtsBackground, defaultState.mediaArtsBackground);
    maybeSetSearchParam(params, "compareMetric", state.compareMetric, defaultState.compareMetric);
    maybeSetSearchParam(params, "compareGroup", state.compareGroup, defaultState.compareGroup);
    maybeSetSearchParam(params, "mapMetric", state.mapMetric, defaultState.mapMetric);
    maybeSetSearchParam(params, "mapStyle", state.mapStyle, defaultState.mapStyle);
    maybeSetSearchParam(params, "question", state.textQuestion, defaultState.textQuestion);
    maybeSetSearchParam(params, "theme", state.selectedTheme, defaultState.selectedTheme);

    url.search = params.toString();
    return url.toString();
  }

  function maybeSetSearchParam(params, key, value, defaultValue) {
    if (value === undefined || value === null || value === "" || value === defaultValue) {
      return;
    }
    params.set(key, value);
  }

  function writeStateToUrl() {
    if (
      typeof window === "undefined" ||
      !window.history ||
      typeof window.history.replaceState !== "function"
    ) {
      return;
    }

    const shareUrl = buildShareUrl();
    if (!shareUrl) {
      return;
    }

    try {
      window.history.replaceState({ surveyExplorer: true }, "", shareUrl);
    } catch (error) {
      // Ignore URL state sync failures in restricted environments.
    }
  }

  function bindEvents() {
    dom.tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.tab = button.dataset.tab;
        renderAll();
      });
    });

    if (dom.shareViewButton) {
      dom.shareViewButton.addEventListener("click", handleShareView);
    }
    if (dom.installAppButton) {
      dom.installAppButton.addEventListener("click", handleInstallApp);
    }

    dom.focusStateSelect.addEventListener("change", () => {
      state.focusState = dom.focusStateSelect.value;
      renderAll();
    });
    dom.schoolTypeSelect.addEventListener("change", () => {
      state.schoolType = dom.schoolTypeSelect.value;
      renderAll();
    });
    dom.teachingBandSelect.addEventListener("change", () => {
      state.teachingBand = dom.teachingBandSelect.value;
      renderAll();
    });
    dom.experienceSelect.addEventListener("change", () => {
      state.experienceBand = dom.experienceSelect.value;
      renderAll();
    });
    dom.backgroundSelect.addEventListener("change", () => {
      state.mediaArtsBackground = dom.backgroundSelect.value;
      renderAll();
    });

    dom.clearFiltersButton.addEventListener("click", () => {
      state.focusState = "all";
      state.schoolType = "all";
      state.teachingBand = "all";
      state.experienceBand = "all";
      state.mediaArtsBackground = "all";
      renderAll();
    });

    dom.clearStateFocusButton.addEventListener("click", () => {
      state.focusState = "all";
      renderAll();
    });

    dom.compareMetricSelect.addEventListener("change", () => {
      state.compareMetric = dom.compareMetricSelect.value;
      renderAll();
    });
    dom.compareGroupSelect.addEventListener("change", () => {
      state.compareGroup = dom.compareGroupSelect.value;
      renderAll();
    });
    dom.mapMetricSelect.addEventListener("change", () => {
      state.mapMetric = dom.mapMetricSelect.value;
      renderAll();
    });
    dom.mapStyleSelect.addEventListener("change", () => {
      state.mapStyle = dom.mapStyleSelect.value;
      renderAll();
    });
    dom.textQuestionSelect.addEventListener("change", () => {
      state.textQuestion = dom.textQuestionSelect.value;
      renderAll();
    });
    dom.themeSelect.addEventListener("change", () => {
      state.selectedTheme = dom.themeSelect.value;
      renderAll();
    });

    dom.content.addEventListener("click", handleActionClick);
  }

  function handleActionClick(event) {
    const actionNode = event.target.closest(".js-action");
    if (!actionNode) {
      return;
    }

    event.preventDefault();
    applyActionFromDataset(actionNode.dataset);
  }

  function applyActionFromDataset(dataset) {
    if (dataset.actionTab && validTabs.has(dataset.actionTab)) {
      state.tab = dataset.actionTab;
    }
    if (dataset.actionCompareMetric && metricById.has(dataset.actionCompareMetric)) {
      state.compareMetric = dataset.actionCompareMetric;
    }
    if (dataset.actionCompareGroup && compareGroupById.has(dataset.actionCompareGroup)) {
      state.compareGroup = dataset.actionCompareGroup;
    }
    if (dataset.actionMapMetric && metricById.has(dataset.actionMapMetric)) {
      state.mapMetric = dataset.actionMapMetric;
    }
    if (dataset.actionTextQuestion && textQuestionById.has(dataset.actionTextQuestion)) {
      state.textQuestion = dataset.actionTextQuestion;
    }
    if (dataset.actionTheme && themeById.has(dataset.actionTheme)) {
      state.selectedTheme = dataset.actionTheme;
    }
    if (dataset.actionFocusState) {
      state.focusState = dataset.actionFocusState;
    }

    renderAll();

    const targetPanel = document.getElementById(`tab-${state.tab}`);
    if (targetPanel) {
      targetPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderMapShell() {
    dom.mapRoot.innerHTML = mapMarkup;
    const svg = dom.mapRoot.querySelector("svg");
    const pathNodes = svg.querySelectorAll("g.state > path");
    if (typeof document.createElement === "function") {
      const overlay = document.createElement("div");
      overlay.className = "map-tower-overlay";
      overlay.id = "map-tower-overlay";
      dom.mapRoot.appendChild(overlay);
    }

    pathNodes.forEach((path) => {
      const stateAbbr = path.getAttribute("class").toUpperCase();
      path.classList.add("state-path");
      path.dataset.state = stateAbbr;
      path.setAttribute("tabindex", "0");
      path.setAttribute("role", "button");
      path.setAttribute("aria-label", data.stateNames[stateAbbr] || stateAbbr);

      path.addEventListener("mouseenter", handleStateHover);
      path.addEventListener("mousemove", handleStateHover);
      path.addEventListener("mouseleave", hideTooltip);
      path.addEventListener("click", handleStateClick);
      path.addEventListener("keydown", handleStateKeydown);

      statePaths.set(stateAbbr, path);
    });
  }

  function syncControls() {
    dom.focusStateSelect.value = state.focusState;
    dom.schoolTypeSelect.value = state.schoolType;
    dom.teachingBandSelect.value = state.teachingBand;
    dom.experienceSelect.value = state.experienceBand;
    dom.backgroundSelect.value = state.mediaArtsBackground;
    dom.compareMetricSelect.value = state.compareMetric;
    dom.compareGroupSelect.value = state.compareGroup;
    dom.mapMetricSelect.value = state.mapMetric;
    dom.mapStyleSelect.value = state.mapStyle;
    dom.textQuestionSelect.value = state.textQuestion;
    dom.themeSelect.value = state.selectedTheme;
    renderTabs();
  }

  function renderTabs() {
    dom.tabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === state.tab);
    });
    dom.tabPanels.forEach((panel) => {
      panel.hidden = panel.id !== `tab-${state.tab}`;
    });
  }

  function renderAll() {
    const cohort = getCohortRespondents();
    refreshThemeOptions();
    ensureThemeSelection(cohort);
    syncControls();

    const focused = getFocusedRespondents(cohort);
    const findings = generateFindings(cohort, focused);

    renderFilterSummary(cohort, focused);
    renderCohortBar(cohort, focused, findings);
    renderStoryLens(cohort);
    renderTransparency(cohort, focused);
    renderHighlights(cohort, focused, findings);
    renderMethodology();
    renderCompare(cohort);
    renderEvidence(cohort, focused, findings);
    renderMap(cohort, focused);
    writeStateToUrl();
  }

  function getCohortRespondents() {
    return allRespondents.filter((respondent) => {
      if (state.schoolType !== "all" && respondent.schoolType !== state.schoolType) {
        return false;
      }
      if (state.teachingBand !== "all" && respondent.teachingBand !== state.teachingBand) {
        return false;
      }
      if (state.experienceBand !== "all" && respondent.experienceBand !== state.experienceBand) {
        return false;
      }
      if (
        state.mediaArtsBackground !== "all" &&
        respondent.mediaArtsBackground !== state.mediaArtsBackground
      ) {
        return false;
      }
      return true;
    });
  }

  function getFocusedRespondents(respondents) {
    if (state.focusState === "all") {
      return respondents;
    }
    return respondents.filter((respondent) => respondent.state === state.focusState);
  }

  function ensureThemeSelection(cohort) {
    const distribution = getThemeDistribution(cohort, state.textQuestion);
    const fallbackDistribution = distribution.items.length
      ? distribution
      : getThemeDistribution(allRespondents, state.textQuestion);
    const availableThemeIds = fallbackDistribution.items.map((item) => item.themeId);
    if (!availableThemeIds.length) {
      return;
    }
    if (!availableThemeIds.includes(state.selectedTheme)) {
      state.selectedTheme = availableThemeIds[0];
    }
  }

  function renderFilterSummary(cohort, focused) {
    const focusLabel = state.focusState === "all" ? "No state focus" : data.stateNames[state.focusState];
    const cohortStateCount = new Set(cohort.map((item) => item.state)).size;
    const focusCount = state.focusState === "all" ? null : focused.length;

    dom.filterSummary.textContent =
      `${formatInteger(cohort.length)} respondents in the current cohort across ${formatInteger(cohortStateCount)} states. ` +
      (state.focusState === "all"
        ? `${focusLabel}.`
        : `${focusLabel} is pinned for local comparison (${formatInteger(focusCount)} respondents after filters).`);
  }

  function renderCohortBar(cohort, focused, findings) {
    const cohortStateCount = new Set(cohort.map((item) => item.state)).size;
    const codedTextCount = cohort.filter((respondent) => respondent.themeSummary.codedResponseCount > 0).length;
    const activeFilters = getActiveFilterLabels();

    dom.cohortRespondents.textContent = formatInteger(cohort.length);
    dom.cohortStates.textContent = formatInteger(cohortStateCount);
    dom.cohortText.textContent = formatInteger(codedTextCount);
    dom.cohortTitle.textContent = activeFilters.length ? activeFilters.join(" / ") : "All mapped U.S. responses";

    if (!cohort.length) {
      dom.cohortDescription.textContent =
        "No respondents match the current filters. Clear one or more filters to restore the findings feed.";
    } else if (state.focusState === "all") {
      dom.cohortDescription.textContent = findings.length
        ? `${findings[0].title} is the clearest pattern to inspect first in this filtered cohort, but it should be read as one descriptive lead rather than the whole story.`
        : "Use the views below to compare segments, read coded themes, and inspect state patterns without treating any single view as complete.";
    } else {
      dom.cohortDescription.textContent = findings.length
        ? `${data.stateNames[state.focusState]} is pinned as the local anchor, and ${findings[0].title.toLowerCase()} is the strongest current lead in this filtered view.`
        : `${data.stateNames[state.focusState]} is pinned as the local anchor for comparison against the filtered cohort.`;
    }

    dom.activeFilterChips.innerHTML = buildFilterChips();
  }

  function buildFilterChips() {
    const chips = [];
    if (state.focusState !== "all") {
      chips.push(makeFilterChip("State focus", data.stateNames[state.focusState]));
    }
    if (state.teachingBand !== "all") {
      chips.push(makeFilterChip("Teaching band", state.teachingBand));
    }
    if (state.schoolType !== "all") {
      chips.push(makeFilterChip("School type", state.schoolType));
    }
    if (state.experienceBand !== "all") {
      chips.push(makeFilterChip("Experience", state.experienceBand));
    }
    if (state.mediaArtsBackground !== "all") {
      chips.push(makeFilterChip("Background", state.mediaArtsBackground));
    }

    if (!chips.length) {
      chips.push(makeFilterChip("Scope", "All mapped respondents"));
    }

    return chips.join("");
  }

  function getActiveFilterLabels() {
    const labels = [];
    if (state.focusState !== "all") {
      labels.push(data.stateNames[state.focusState]);
    }
    if (state.teachingBand !== "all") {
      labels.push(state.teachingBand);
    }
    if (state.schoolType !== "all") {
      labels.push(state.schoolType);
    }
    if (state.experienceBand !== "all") {
      labels.push(state.experienceBand);
    }
    if (state.mediaArtsBackground !== "all") {
      labels.push(state.mediaArtsBackground);
    }
    return labels;
  }

  function renderStoryLens(cohort) {
    const question = textQuestionById.get(state.textQuestion);
    if (!question || !dom.storyLensSummary) {
      return;
    }

    const distribution = getThemeDistribution(cohort, state.textQuestion);
    const selectedTheme = themeById.get(state.selectedTheme);
    const selectedThemeEntry = distribution.items.find((item) => item.themeId === state.selectedTheme);
    const scopeLabel =
      state.focusState === "all"
        ? "the current filtered cohort"
        : `${data.stateNames[state.focusState]} within the current filtered cohort`;

    dom.storyLensSummary.textContent = !distribution.responseCount
      ? `The opening views are ready to follow ${lowercaseFirst(question.label)} as soon as this cohort includes coded responses for it. Pick a broader cohort or a different question to bring the theme-led findings back.`
      : `${question.label} now leads the featured findings, theme summaries, and map callouts. ${selectedTheme ? selectedTheme.label : "The selected theme"} is the active focus for ${scopeLabel}, based on ${selectedThemeEntry ? formatPercent(selectedThemeEntry.share) : "0%"} of ${sampleLabel(distribution.responseCount, `theme:${state.selectedTheme}`)} on this lens.`;
  }

  function renderTransparency(cohort, focused) {
    if (!dom.transparencySummary || !dom.transparencyList) {
      return;
    }

    const cohortStateCount = new Set(cohort.map((item) => item.state)).size;
    const codedTextCount = cohort.filter((respondent) => respondent.themeSummary.codedResponseCount > 0).length;
    const focusLabel =
      state.focusState === "all"
        ? "No single state is pinned right now."
        : `${data.stateNames[state.focusState]} is the pinned local view within this cohort.`;

    dom.transparencySummary.textContent =
      "This explorer treats the survey as a situated interpretation rather than a neutral readout: it keeps source context, transformation steps, uncertainty, and missing coverage visible so the strongest pattern never becomes the whole story by itself.";

    dom.transparencyList.innerHTML = [
      makeMethodCard(
        "Documented sources",
        "Context",
        `This build uses ${data.sourceWorkbook} together with ${data.sourceReport}. The survey window spans ${formatWindow(data.surveyWindow)}.`,
        [data.sourceWorkbook, data.sourceReport, formatWindow(data.surveyWindow)],
      ),
      makeMethodCard(
        "Who appears here",
        "Scope",
        `The current cohort shows ${formatInteger(cohort.length)} mapped respondents across ${formatInteger(cohortStateCount)} states. Only respondents with usable U.S. state data appear on the map. ${focusLabel}`,
        [
          `${formatInteger(cohort.length)} mapped respondents`,
          `${formatInteger(cohortStateCount)} states`,
          `${formatInteger(codedTextCount)} coded text respondents`,
        ],
      ),
      makeMethodCard(
        "What is observed vs derived",
        "Method",
        "Some views show directly reported answers, while others show derived scores or interpreted theme coding. Composite scores combine multiple survey items, and theme labels summarize open responses rather than reproducing them exactly.",
        [
          `${formatInteger(scoreMethodology.length)} derived scores`,
          "Grouped comparisons",
          "Interpretive theme coding",
        ],
      ),
      makeMethodCard(
        "How to read responsibly",
        "Limit",
        "This is a cross-sectional survey, so it shows patterns rather than time trends. Findings are descriptive rather than causal, and small-sample groups stay visible but muted so they do not overrun the main takeaways.",
        [
          "Cross-sectional",
          "Not causal",
          "Small-sample guardrails",
        ],
      ),
      makeMethodCard(
        "Labor behind the view",
        "Labor",
        "Survey respondents, report authors, spreadsheet preparation, state cleaning, score construction, theme coding, and interface design all shape what is visible here. The analysis is made, not merely found.",
        [
          "Respondents",
          "Report authors",
          "Cleaning",
          "Coding",
          "Design",
        ],
      ),
    ].join("");
  }

  function renderHighlights(cohort, focused, findings) {
    const question = textQuestionById.get(state.textQuestion);
    const questionLabel = question ? lowercaseFirst(question.label) : "this story lens";
    const storyDistribution = getThemeDistribution(cohort, state.textQuestion);
    const topTheme = storyDistribution.items[0];
    const topResource = getTopListItem(cohort, "resourcesNeeded");
    const aiReadinessMeta = getSignalMeta(computeMetric(cohort, "aiReadiness").denominator, "aiReadiness", "general");
    const aiConcernMeta = getSignalMeta(computeMetric(cohort, "aiConcern").denominator, "aiConcern", "general");
    const themeMeta = topTheme
      ? getSignalMeta(storyDistribution.responseCount, `theme:${topTheme.themeId}`, "text")
      : null;
    const supportMeta = getSignalMeta(cohort.length, "usesAiForTeaching", "general");

    dom.featuredFinding.innerHTML = findings.length
      ? makeFeatureFinding(findings[0])
      : '<p class="empty-state">Not enough signal is available to surface a featured finding for this cohort.</p>';

    dom.highlightsCards.innerHTML = [
      makeStatCard(
        "AI readiness",
        formatMetricValue("aiReadiness", computeMetric(cohort, "aiReadiness").value),
        `${sampleLabel(computeMetric(cohort, "aiReadiness").denominator, "aiReadiness")} • ${aiReadinessMeta.label}`,
      ),
      makeStatCard(
        "AI concern",
        formatMetricValue("aiConcern", computeMetric(cohort, "aiConcern").value),
        `${sampleLabel(computeMetric(cohort, "aiConcern").denominator, "aiConcern")} • ${aiConcernMeta.label}`,
      ),
      makeStatCard(
        "Dominant story theme",
        topTheme ? themeById.get(topTheme.themeId).label : "No coded theme",
        topTheme
          ? `${formatPercent(topTheme.share)} of coded responses on ${questionLabel} • ${themeMeta.label}`
          : `Not enough coded responses on ${questionLabel}`,
      ),
      makeStatCard(
        "Top requested support",
        topResource ? topResource.label : "No clear request",
        topResource ? `${formatInteger(topResource.count)} mentions • ${supportMeta.label}` : "No resource data",
      ),
    ].join("");

    const pulseMetrics = [
      "digitalReadiness",
      "mediaArtsReadiness",
      "usesAiForTeaching",
      "highEthicalConcern",
    ];
    dom.highlightsMetricBars.innerHTML = pulseMetrics
      .map((metricId) => {
        const metric = metricById.get(metricId);
        const cohortResult = computeMetric(cohort, metricId);
        const baselineResult = computeMetric(allRespondents, metricId);
        const delta =
          cohortResult.value !== null && baselineResult.value !== null
            ? cohortResult.value - baselineResult.value
            : null;

        return makeBarRow({
          label: metric.label,
          sublabel: describeSample(metricId, cohortResult),
          valueLabel: formatMetricValue(metricId, cohortResult.value),
          width: widthForValue(cohortResult.value),
          deltaLabel: delta === null ? "No baseline available" : `${formatSigned(delta)} vs full mapped dataset`,
          badgeLabel: getSignalMeta(cohortResult.denominator, metricId, "general").label,
          badgeTone: getSignalMeta(cohortResult.denominator, metricId, "general").tone,
        });
      })
      .join("");

    dom.highlightsSummary.textContent = findings.length
      ? `These findings are ranked on ${questionLabel} so you can move quickly from the strongest signal to the exact comparison, evidence, or map view behind it. They are filtered, thresholded, and descriptive rather than causal.`
      : "No findings can be ranked yet for this cohort.";

    dom.findingList.innerHTML = findings.length
      ? findings.map((finding) => makeFindingCard(finding)).join("")
      : '<p class="empty-state">Adjust the filters to restore the finding feed.</p>';

    const routes = findings.filter((finding) => finding.action && finding.actionLabel).slice(0, 3);
    dom.routeSummary.textContent = routes.length
      ? "Use these guided routes to move from the highest-value signal into the exact comparison, evidence, or map view."
      : "A route list will appear here when the cohort has enough signal.";
    dom.routeList.innerHTML = routes.length
      ? routes.map((finding, index) => makeRouteCard(finding, index + 1)).join("")
      : '<p class="empty-state">No guided routes are available for this cohort.</p>';
  }

  function renderMethodology() {
    const compareRules = qualityGuidance.compare;
    const stateRules = qualityGuidance.state;
    const textRules = qualityGuidance.text;

    dom.qualitySummary.textContent =
      `Signals are labeled by usable sample size. Groups below n=${formatInteger(compareRules.directionalMinimum)} and states below n=${formatInteger(stateRules.directionalMinimum)} stay visible but do not drive the strongest callouts. Text-theme findings need at least n=${formatInteger(textRules.directionalMinimum)} coded responses to surface as directional. Derived scores and coded themes add interpretation on top of the raw survey answers, so the cards below explain what each score includes.`;

    dom.methodologyList.innerHTML = scoreMethodology.length
      ? scoreMethodology
          .map(
            (item) => `
              <article class="method-card">
                <span class="method-label">${escapeHtml(item.label)}</span>
                <span class="method-kind">${escapeHtml(item.kind)}</span>
                <p class="method-note">${escapeHtml(item.scaleNote)}</p>
                <div class="method-component-list">
                  ${item.components
                    .map(
                      (component) =>
                        `<span class="method-component">${escapeHtml(component.label)}</span>`,
                    )
                    .join("")}
                </div>
              </article>
            `,
          )
          .join("")
      : '<p class="empty-state">Score methodology metadata is not available in this build.</p>';
  }

  function renderCompare(cohort) {
    const metric = metricById.get(state.compareMetric);
    const cohortResult = computeMetric(cohort, state.compareMetric);
    const entries = aggregateByGroup(cohort, state.compareGroup, state.compareMetric);
    const visibleEntries = entries.filter(
      (entry) => getSignalMeta(entry.sampleSize, state.compareMetric, "compare").visible,
    );
    const actionableEntries = visibleEntries.filter(
      (entry) => getSignalMeta(entry.sampleSize, state.compareMetric, "compare").calloutEligible,
    );
    const best = actionableEntries[0];
    const worst = actionableEntries[actionableEntries.length - 1];
    const gap = best && worst ? best.value - worst.value : null;

    dom.compareSummary.textContent =
      actionableEntries.length < 2
        ? `Not enough confident variation is available to compare groups on ${metric.label.toLowerCase()}. Small-sample groups remain visible below, but this view stays descriptive rather than explanatory.`
        : `${metric.label} varies most between ${best.label} and ${worst.label} in the current cohort. This comparison shows a descriptive gap, not a causal explanation for why the groups differ.`;
    dom.compareDeltaSummary.textContent =
      cohortResult.value === null
        ? "No cohort baseline is available for this metric."
        : `${metric.label} is centered on the current cohort baseline of ${formatMetricValue(state.compareMetric, cohortResult.value)}. Groups to the right exceed the cohort; groups to the left trail it. Read position and shared baseline first, with color only reinforcing the direction of the gap.`;
    dom.compareScoreSummary.textContent =
      cohortResult.value === null
        ? "No absolute score positions are available for this metric."
        : `The dot chart shows each group's absolute position on the 0-100 scale, with the cohort baseline marked for reference. The aligned scale gives the precise read; labels and badges keep the uncertainty visible.`;

    if (actionableEntries.length < 2) {
      dom.compareTakeaway.innerHTML =
        '<p class="empty-state">Choose a broader cohort or a different metric to produce a more confident group comparison. The list below still shows available groups with confidence labels.</p>';
      dom.compareBarList.innerHTML = visibleEntries.length
        ? visibleEntries
            .map((entry) =>
              makeDeltaRow({
                label: entry.label,
                sublabel: `${formatInteger(entry.respondents)} respondents • ${sampleLabel(entry.sampleSize, state.compareMetric)}`,
                valueLabel: formatMetricValue(state.compareMetric, entry.value),
                deltaValue: entry.delta,
                maxDelta: getMaxAbsDelta(visibleEntries),
                deltaLabel: entry.delta === null ? "No cohort baseline" : `${formatSigned(entry.delta)} vs cohort`,
                badgeLabel: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").label,
                badgeTone: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").tone,
                muted: !getSignalMeta(entry.sampleSize, state.compareMetric, "compare").calloutEligible,
              }),
            )
            .join("")
        : '<p class="empty-state">No comparable groups are available for this cohort.</p>';
      dom.compareScoreChart.innerHTML = visibleEntries.length
        ? visibleEntries
            .map((entry) =>
              makePositionRow({
                label: entry.label,
                sublabel: `${sampleLabel(entry.sampleSize, state.compareMetric)}`,
                value: entry.value,
                baseline: cohortResult.value,
                valueLabel: formatMetricValue(state.compareMetric, entry.value),
                badgeLabel: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").label,
                badgeTone: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").tone,
                bubbleScale: bubbleScaleForSample(entry.sampleSize, "compare"),
                muted: !getSignalMeta(entry.sampleSize, state.compareMetric, "compare").calloutEligible,
              }),
            )
            .join("")
        : '<p class="empty-state">No absolute positions are available for this cohort.</p>';
      dom.compareHighlightList.innerHTML = "";
      return;
    }

    dom.compareTakeaway.innerHTML = best && worst
      ? `
        <div class="compare-callout">
          <div class="finding-head">
            <span class="finding-kind">Plain-language takeaway</span>
            <span class="signal-pill">${escapeHtml(describeSignalStrength(Math.min(best.sampleSize, worst.sampleSize), state.compareMetric, "compare"))}</span>
          </div>
          <h3>${escapeHtml(`${best.label} sits highest while ${worst.label} trails on ${metric.label.toLowerCase()}.`)}</h3>
          <p>${escapeHtml(`This is the main segment split on the current lens, with a ${formatMetricValue(state.compareMetric, gap)} gap between the top and bottom groups.`)}</p>
          <div class="metric-pill-row">
            <span class="metric-pill">${escapeHtml(`${best.label}: ${formatMetricValue(state.compareMetric, best.value)}`)}</span>
            <span class="metric-pill">${escapeHtml(`Gap: ${formatMetricValue(state.compareMetric, gap)}`)}</span>
            <span class="metric-pill">${escapeHtml(`${worst.label}: ${formatMetricValue(state.compareMetric, worst.value)}`)}</span>
          </div>
        </div>
      `
      : '<p class="empty-state">Not enough comparable groups are available for this cohort.</p>';

    dom.compareBarList.innerHTML = visibleEntries
      .map((entry) =>
        makeDeltaRow({
          label: entry.label,
          sublabel: `${formatInteger(entry.respondents)} respondents • ${sampleLabel(entry.sampleSize, state.compareMetric)}`,
          valueLabel: formatMetricValue(state.compareMetric, entry.value),
          deltaValue: entry.delta,
          maxDelta: getMaxAbsDelta(visibleEntries),
          deltaLabel: entry.delta === null ? "No cohort baseline" : `${formatSigned(entry.delta)} vs cohort`,
          badgeLabel: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").label,
          badgeTone: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").tone,
          muted: !getSignalMeta(entry.sampleSize, state.compareMetric, "compare").calloutEligible,
        }),
      )
      .join("");
    dom.compareScoreChart.innerHTML = visibleEntries
      .map((entry) =>
        makePositionRow({
          label: entry.label,
          sublabel: `${sampleLabel(entry.sampleSize, state.compareMetric)}`,
          value: entry.value,
          baseline: cohortResult.value,
          valueLabel: formatMetricValue(state.compareMetric, entry.value),
          badgeLabel: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").label,
          badgeTone: getSignalMeta(entry.sampleSize, state.compareMetric, "compare").tone,
          bubbleScale: bubbleScaleForSample(entry.sampleSize, "compare"),
          muted: !getSignalMeta(entry.sampleSize, state.compareMetric, "compare").calloutEligible,
        }),
      )
      .join("");

    const highlightCards = [];
    if (best) {
      highlightCards.push({
        tone: "positive",
        title: "Highest group",
        body: `${best.label} leads on ${metric.label.toLowerCase()}.`,
        evidence: `${formatMetricValue(state.compareMetric, best.value)} with ${sampleLabel(best.sampleSize, state.compareMetric)}`,
      });
    }
    if (worst) {
      highlightCards.push({
        tone: "caution",
        title: "Lowest group",
        body: `${worst.label} trails the cohort on ${metric.label.toLowerCase()}.`,
        evidence: `${formatMetricValue(state.compareMetric, worst.value)} with ${sampleLabel(worst.sampleSize, state.compareMetric)}`,
      });
    }
    if (gap !== null) {
      highlightCards.push({
        tone: "neutral",
        title: "Largest spread",
        body: `${formatMetricValue(state.compareMetric, gap)} separates the top and bottom groups.`,
        evidence: `${best.label} vs ${worst.label}`,
      });
    }

    dom.compareHighlightList.innerHTML = highlightCards
      .map((card) => makeInsightCard(card))
      .join("");
  }

  function renderEvidence(cohort, focused, findings) {
    const question = textQuestionById.get(state.textQuestion);
    const distribution = getThemeDistribution(cohort, state.textQuestion);
    const focusedDistribution =
      state.focusState === "all" ? distribution : getThemeDistribution(focused, state.textQuestion);
    const selectedTheme = distribution.items.find((item) => item.themeId === state.selectedTheme);
    const quotes = getQuotes(cohort, focused, state.textQuestion, state.selectedTheme);
    const dominantTheme = distribution.items[0];
    const dominantStance = distribution.stances[0];
    const focusShare =
      state.focusState === "all"
        ? null
        : focusedDistribution.items.find((item) => item.themeId === state.selectedTheme);

    dom.evidenceSummary.textContent =
      `${question.label} in the current cohort. Theme counts help you scan recurring ideas, while quotes keep more context and language visible so smaller or less dominant voices are not flattened into a single summary. Theme labels are interpretive coding rather than exact respondent wording. Current coded-text basis: ${sampleLabel(distribution.responseCount, `theme:${state.selectedTheme}`)} • ${describeSignalStrength(distribution.responseCount, `theme:${state.selectedTheme}`, "text")}${state.focusState === "all" ? "." : `, with ${data.stateNames[state.focusState]} prioritized when relevant.`}`;

    dom.themeCards.innerHTML = [
      makeMiniCard(
        "Coded responses",
        formatInteger(distribution.responseCount),
        `${sampleLabel(distribution.responseCount, `theme:${state.selectedTheme}`)} • ${describeSignalStrength(distribution.responseCount, `theme:${state.selectedTheme}`, "text")}`,
      ),
      makeMiniCard(
        "Dominant theme",
        dominantTheme ? themeById.get(dominantTheme.themeId).label : "No coded theme",
        dominantTheme
          ? `${formatPercent(dominantTheme.share)} of responses • ${sampleLabel(distribution.responseCount, `theme:${dominantTheme.themeId}`)}`
          : "Not enough coded text",
      ),
      makeMiniCard(
        question.supportsStance ? "Dominant stance" : "Selected theme share",
        question.supportsStance
          ? dominantStance
            ? capitalize(dominantStance.label)
            : "No clear stance"
          : selectedTheme
            ? formatPercent(selectedTheme.share)
            : "-",
        question.supportsStance
          ? dominantStance
            ? `${formatInteger(dominantStance.count)} coded responses • ${describeSignalStrength(distribution.responseCount, `theme:${state.selectedTheme}`, "text")}`
            : "Stance not available"
          : selectedTheme
            ? themeById.get(state.selectedTheme).label
            : "No theme data",
      ),
      makeMiniCard(
        state.focusState === "all" ? "Focus state" : data.stateNames[state.focusState],
        state.focusState === "all"
          ? "All states"
          : focusShare
            ? formatPercent(focusShare.share)
            : "No coded match",
        state.focusState === "all"
          ? "Select a state to compare local emphasis."
          : `${themeById.get(state.selectedTheme).label} in focused state responses • ${focusShare ? sampleLabel(focusedDistribution.responseCount, `theme:${state.selectedTheme}`) : "No coded state sample"}`,
      ),
    ].join("");

    if (!distribution.items.length) {
      dom.themeBarList.innerHTML =
        '<p class="empty-state">No coded theme data is available for this question in the current cohort.</p>';
      dom.stanceList.innerHTML = "";
      dom.quoteList.innerHTML =
        '<p class="empty-state">No representative quotes are available for this selection.</p>';
    } else {
      dom.themeBarList.innerHTML = distribution.items
        .map((item) =>
          makeBarRow({
            label: themeById.get(item.themeId).label,
            sublabel: `${formatInteger(item.count)} responses • ${sampleLabel(distribution.responseCount, `theme:${item.themeId}`)}`,
            valueLabel: formatPercent(item.share),
            width: widthForValue(item.share),
            selected: item.themeId === state.selectedTheme,
            badgeLabel: getSignalMeta(distribution.responseCount, `theme:${item.themeId}`, "text").label,
            badgeTone: getSignalMeta(distribution.responseCount, `theme:${item.themeId}`, "text").tone,
            muted: !getSignalMeta(distribution.responseCount, `theme:${item.themeId}`, "text").calloutEligible,
          }),
        )
        .join("");

      dom.stanceList.innerHTML = question.supportsStance && distribution.stances.length
        ? distribution.stances
            .map(
              (stance) =>
                `<span class="stance-chip">${escapeHtml(`${capitalize(stance.label)} • ${formatInteger(stance.count)}`)}</span>`,
            )
            .join("")
        : "";

      dom.quoteList.innerHTML = quotes.length
        ? quotes
            .map(
              (quote) => `
                <div class="quote-card">
                  <span class="quote-meta">${escapeHtml(`${quote.stateName} • ${quote.questionLabel}`)}</span>
                  <span class="quote-text">${escapeHtml(quote.text)}</span>
                  <span class="quote-tags">${escapeHtml(`Themes: ${quote.themes.map((themeId) => themeById.get(themeId).label).join(", ")}`)}</span>
                </div>
              `,
            )
            .join("")
        : '<p class="empty-state">No representative quotes matched the current theme focus.</p>';
    }

    const challenges = getTopListItems(cohort, "supportChallenges", 5);
    const resources = getTopListItems(cohort, "resourcesNeeded", 5);
    dom.challengeList.innerHTML = makeSimpleList(challenges, "mentions", "No barrier data is available for this cohort.");
    dom.resourceList.innerHTML = makeSimpleList(resources, "mentions", "No resource requests are available for this cohort.");

    const evidenceFindings = findings
      .filter((finding) => ["Theme", "Need", "Tension"].includes(finding.kind))
      .slice(0, 3);
    dom.evidenceFindingSummary.textContent = evidenceFindings.length
      ? "These findings connect the coded themes, stances, and practical needs that show up most clearly in the current cohort. Read them alongside the quotes above, because the codes summarize language rather than replacing it."
      : "Evidence-led findings will appear here when the cohort has enough qualitative signal.";
    dom.evidenceFindingList.innerHTML = evidenceFindings.length
      ? evidenceFindings.map((finding) => makeFindingCard(finding, { compact: true })).join("")
      : '<p class="empty-state">No evidence-led findings are available for this cohort.</p>';
  }

  function renderMap(cohort, focused) {
    const metric = metricById.get(state.mapMetric);
    latestStateMetrics = aggregateByState(cohort, state.mapMetric);
    const cohortMetric = computeMetric(cohort, state.mapMetric);
    const visibleStateEntries = latestStateMetrics.filter(
      (entry) => getSignalMeta(entry.sampleSize, state.mapMetric, "map").visible,
    );
    const actionableStateEntries = visibleStateEntries.filter(
      (entry) => getSignalMeta(entry.sampleSize, state.mapMetric, "map").calloutEligible,
    );
    const deltaEntries = visibleStateEntries.map((entry) => ({
      ...entry,
      delta:
        entry.value !== null && cohortMetric.value !== null
          ? entry.value - cohortMetric.value
          : null,
    }));
    const maxValue = Math.max(...visibleStateEntries.map((entry) => entry.value || 0), 0);
    const maxDelta = getMaxAbsDelta(deltaEntries);
    const minPositive = Math.min(
      ...visibleStateEntries.filter((entry) => entry.value > 0).map((entry) => entry.value),
      Number.POSITIVE_INFINITY,
    );

    dom.mapSummary.textContent =
      `${metric.label} across states after applying the current cohort filters. ${state.mapStyle === "towers" ? "3D skyline mode is exploratory: it adds depth to help spot clusters, but it is less precise than the ranked list and delta lanes on the right." : "Filled-state mode is the recommended default because it keeps the geographic pattern readable without adding extra depth cues."} Use the ranked list and delta lanes for exact comparison. States below ${sampleLabel(qualityGuidance.state.directionalMinimum, state.mapMetric)} are faded and excluded from top-state callouts.`;

    statePaths.forEach((pathNode, stateAbbr) => {
      const entry = latestStateMetrics.find((item) => item.id === stateAbbr);
      const signalMeta = entry ? getSignalMeta(entry.sampleSize, state.mapMetric, "map") : null;
      const fill =
        state.mapStyle === "filled"
          ? resolveMapFill(entry && signalMeta.visible ? entry.value : null, maxValue)
          : resolveMapFill(entry && signalMeta.visible ? (entry.value || 0) * 0.42 : null, maxValue || 1);
      pathNode.style.fill = fill;
      pathNode.style.opacity = signalMeta && signalMeta.calloutEligible ? "1" : signalMeta && signalMeta.visible ? "0.42" : "0.18";
      pathNode.classList.toggle("is-focus", state.focusState === stateAbbr);
      pathNode.classList.toggle("is-low-confidence", Boolean(signalMeta && signalMeta.visible && !signalMeta.calloutEligible));
      pathNode.dataset.tooltip = entry
        ? buildStateTooltip(entry, metric, cohortMetric.value)
        : "No respondents in the current cohort for this state.";
    });

    dom.legendMin.textContent = Number.isFinite(minPositive) ? formatMetricValue(state.mapMetric, minPositive) : "0";
    dom.legendMax.textContent = formatMetricValue(state.mapMetric, maxValue);
    dom.legendCaption.textContent =
      metric.type === "score"
        ? `${state.mapStyle === "towers" ? "State surface color shows the selected score, while tower height redundantly reinforces relative magnitude for exploration." : "Average state score on the selected lens."} Use the ranking list for exact values.`
        : metric.denominator === "text"
          ? `${state.mapStyle === "towers" ? "Tower height and color reflect how often the selected idea appears in each state's coded responses." : "Share of coded-text respondents in each state mentioning the selected theme."} Use the ranking list for exact values.`
          : `${state.mapStyle === "towers" ? "Tower height and color reflect the state-level share on the active lens." : "Share of respondents in each state matching the selected lens."} Use the ranking list for exact values.`;

    const focusEntry =
      state.focusState === "all"
        ? null
        : latestStateMetrics.find((item) => item.id === state.focusState);
    const focusMetric = computeMetric(focused, state.mapMetric);
    const question = textQuestionById.get(state.textQuestion);
    const questionLabel = question ? lowercaseFirst(question.label) : "this story lens";
    const focusTheme = getThemeDistribution(focused, state.textQuestion).items[0];

    dom.mapFocusTitle.textContent =
      state.focusState === "all" ? "No state selected" : data.stateNames[state.focusState];
    dom.mapFocusCopy.textContent =
      state.focusState === "all"
        ? "Use the map after the main findings to inspect whether a signal looks localized or broadly distributed."
        : focusEntry
          ? `${data.stateNames[state.focusState]} is compared against the current cohort on the active map lens and on the dominant theme for ${questionLabel}. ${describeSignalStrength(focusMetric.denominator, state.mapMetric, "map")}. Read this as a descriptive state contrast rather than a causal claim about place.`
      : `${data.stateNames[state.focusState]} has no respondents in the current cohort for this lens.`;
    dom.mapDeltaSummary.textContent =
      cohortMetric.value === null
        ? "No cohort baseline is available for the current map metric."
        : `This state skyline compares each state's score against the filtered cohort baseline of ${formatMetricValue(state.mapMetric, cohortMetric.value)}.`;

    if (state.focusState === "all") {
      dom.mapFocusCards.innerHTML = [
        makeMiniCard(
          "Cohort score",
          formatMetricValue(state.mapMetric, cohortMetric.value),
          `${sampleLabel(cohortMetric.denominator, state.mapMetric)} • ${describeSignalStrength(cohortMetric.denominator, state.mapMetric, "general")}`,
        ),
        makeMiniCard(
          "Eligible states",
          formatInteger(actionableStateEntries.length),
          `Directional or stronger at ${sampleLabel(qualityGuidance.state.directionalMinimum, state.mapMetric)} and above`,
        ),
        makeMiniCard(
          "Top state",
          actionableStateEntries[0] ? actionableStateEntries[0].label : "-",
          actionableStateEntries[0]
            ? `${formatMetricValue(state.mapMetric, actionableStateEntries[0].value)} • ${sampleLabel(actionableStateEntries[0].sampleSize, state.mapMetric)}`
            : "No state clears the directional threshold",
        ),
        makeMiniCard("Pinned state", "None", "Click a state to compare it to the cohort"),
      ].join("");
    } else {
      const delta =
        focusMetric.value !== null && cohortMetric.value !== null
          ? focusMetric.value - cohortMetric.value
          : null;
      dom.mapFocusCards.innerHTML = [
        makeMiniCard(
          "State score",
          formatMetricValue(state.mapMetric, focusMetric.value),
          `${sampleLabel(focusMetric.denominator, state.mapMetric)} • ${describeSignalStrength(focusMetric.denominator, state.mapMetric, "map")}`,
        ),
        makeMiniCard(
          "Delta vs cohort",
          delta === null ? "-" : formatSigned(delta),
          delta === null ? "No comparison available" : `${formatMetricValue(state.mapMetric, cohortMetric.value)} cohort baseline`,
        ),
        makeMiniCard(
          "State respondents",
          formatInteger(focused.length),
          `In ${data.stateNames[state.focusState]} after current filters`,
        ),
        makeMiniCard(
          "Dominant story theme",
          focusTheme ? themeById.get(focusTheme.themeId).label : "No coded theme",
          focusTheme
            ? `${formatPercent(focusTheme.share)} of coded responses on ${questionLabel}`
            : `Not enough coded responses on ${questionLabel}`,
        ),
      ].join("");
    }
    dom.mapDeltaChart.innerHTML = visibleStateEntries.length
      ? deltaEntries
          .slice(0, 12)
          .map((entry) =>
            makeDeltaRow({
              label: entry.label,
              sublabel: `${sampleLabel(entry.sampleSize, state.mapMetric)}`,
              valueLabel: formatMetricValue(state.mapMetric, entry.value),
              deltaValue: entry.delta,
              maxDelta,
              deltaLabel: entry.delta === null ? "No cohort baseline" : `${formatSigned(entry.delta)} vs cohort`,
              badgeLabel: getSignalMeta(entry.sampleSize, state.mapMetric, "map").label,
              badgeTone: getSignalMeta(entry.sampleSize, state.mapMetric, "map").tone,
              muted: !getSignalMeta(entry.sampleSize, state.mapMetric, "map").calloutEligible,
              selected: entry.id === state.focusState,
            }),
          )
          .join("")
      : '<p class="empty-state">No state deltas are available for this cohort.</p>';

    dom.mapRankingList.innerHTML = latestStateMetrics.length
      ? latestStateMetrics
          .map((entry) =>
            makePositionRow({
              label: entry.label,
              sublabel: `${formatInteger(entry.respondents)} respondents • ${sampleLabel(entry.sampleSize, state.mapMetric)}`,
              value: entry.value,
              baseline: cohortMetric.value,
              valueLabel: formatMetricValue(state.mapMetric, entry.value),
              selected: entry.id === state.focusState,
              badgeLabel: getSignalMeta(entry.sampleSize, state.mapMetric, "map").label,
              badgeTone: getSignalMeta(entry.sampleSize, state.mapMetric, "map").tone,
              bubbleScale: bubbleScaleForSample(entry.sampleSize, "map"),
              muted: !getSignalMeta(entry.sampleSize, state.mapMetric, "map").calloutEligible,
            }),
          )
          .join("")
      : '<p class="empty-state">No state-level data is available for this cohort.</p>';

    renderMapTowers(visibleStateEntries, actionableStateEntries, maxValue);
  }

  function renderMapTowers(visibleStateEntries, actionableStateEntries, maxValue) {
    const overlay = document.getElementById("map-tower-overlay");
    const svg = dom.mapRoot.querySelector("svg");
    if (!overlay) {
      return;
    }

    if (state.mapStyle !== "towers" || !svg || typeof svg.getAttribute !== "function") {
      overlay.innerHTML = "";
      return;
    }

    const viewBox = parseViewBox(svg.getAttribute("viewBox"));
    if (!viewBox) {
      overlay.innerHTML = "";
      return;
    }

    const labeledStates = new Set(actionableStateEntries.slice(0, 5).map((entry) => entry.id));
    if (state.focusState !== "all") {
      labeledStates.add(state.focusState);
    }

    overlay.innerHTML = visibleStateEntries
      .map((entry) => {
        const pathNode = statePaths.get(entry.id);
        if (!pathNode || typeof pathNode.getBBox !== "function") {
          return "";
        }

        const box = pathNode.getBBox();
        if (!box || !Number.isFinite(box.x)) {
          return "";
        }

        const anchor = getTowerAnchor(entry.id, box);
        const xPercent = ((anchor.x - viewBox.minX) / viewBox.width) * 100;
        const yPercent = ((anchor.y - viewBox.minY) / viewBox.height) * 100;
        const height = towerHeightForValue(entry.value, maxValue, entry.id === state.focusState);
        const fill = resolveMapFill(entry.value, maxValue);
        const meta = getSignalMeta(entry.sampleSize, state.mapMetric, "map");
        const front = fill;
        const side = shiftRgb(fill, -0.24);
        const top = shiftRgb(fill, 0.18);

        return `
          <div
            class="state-tower ${entry.id === state.focusState ? "is-focus" : ""} ${meta.calloutEligible ? "" : "is-muted"}"
            style="left:${xPercent}%; top:${yPercent}%; --tower-height:${height}px; --tower-front:${front}; --tower-side:${side}; --tower-top:${top};"
            aria-hidden="true"
          >
            <span class="tower-front-face"></span>
            <span class="tower-side-face"></span>
            <span class="tower-top-face"></span>
            <span class="tower-shadow"></span>
            ${labeledStates.has(entry.id) ? `<span class="tower-label">${escapeHtml(entry.id)}</span>` : ""}
          </div>
        `;
      })
      .join("");
  }

  function parseViewBox(viewBoxValue) {
    if (!viewBoxValue) {
      return null;
    }
    const parts = String(viewBoxValue)
      .trim()
      .split(/\s+/)
      .map((value) => Number(value));
    if (parts.length !== 4 || parts.some((value) => Number.isNaN(value))) {
      return null;
    }
    return {
      minX: parts[0],
      minY: parts[1],
      width: parts[2],
      height: parts[3],
    };
  }

  function getTowerAnchor(stateAbbr, box) {
    const offsets = {
      CT: { x: 13, y: -3 },
      DC: { x: 18, y: 3 },
      DE: { x: 13, y: 2 },
      MA: { x: 13, y: -4 },
      MD: { x: 10, y: 3 },
      NH: { x: 11, y: -4 },
      NJ: { x: 11, y: 1 },
      RI: { x: 18, y: -1 },
      VT: { x: 11, y: -2 },
    };
    const tweak = offsets[stateAbbr] || { x: 0, y: 0 };
    return {
      x: box.x + box.width * 0.5 + tweak.x,
      y: box.y + box.height * 0.6 + tweak.y,
    };
  }

  function towerHeightForValue(value, maxValue, isFocus) {
    if (value === null || value === undefined || maxValue <= 0) {
      return 10;
    }
    const normalized = Math.max(0.14, value / maxValue);
    return Math.round(14 + normalized * 64 + (isFocus ? 8 : 0));
  }

  function computeMetric(respondents, metricId) {
    const metric = metricById.get(metricId);
    if (!metric) {
      return { value: null, numerator: 0, denominator: 0 };
    }

    if (metric.type === "score") {
      const values = respondents
        .map((respondent) => respondent.scores[metric.field])
        .filter((value) => typeof value === "number");
      if (!values.length) {
        return { value: null, numerator: 0, denominator: 0 };
      }
      const sum = values.reduce((total, value) => total + value, 0);
      return { value: sum / values.length, numerator: sum, denominator: values.length };
    }

    if (metric.source === "flag") {
      const denominator = respondents.length;
      if (!denominator) {
        return { value: null, numerator: 0, denominator: 0 };
      }
      const numerator = respondents.filter((respondent) => respondent.flags[metric.field]).length;
      return { value: (numerator / denominator) * 100, numerator, denominator };
    }

    if (metric.source === "theme") {
      const textRespondents = respondents.filter((respondent) => respondent.themeSummary.codedResponseCount > 0);
      const denominator = textRespondents.length;
      if (!denominator) {
        return { value: null, numerator: 0, denominator: 0 };
      }
      const numerator = textRespondents.filter((respondent) =>
        respondent.themeSummary.allThemes.includes(metric.themeId),
      ).length;
      return { value: (numerator / denominator) * 100, numerator, denominator };
    }

    return { value: null, numerator: 0, denominator: 0 };
  }

  function aggregateByGroup(respondents, groupField, metricId) {
    const groups = new Map();
    respondents.forEach((respondent) => {
      const key = respondent[groupField] || "Unspecified";
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key).push(respondent);
    });

    const cohortMetric = computeMetric(respondents, metricId);
    return Array.from(groups.entries())
      .map(([label, items]) => {
        const result = computeMetric(items, metricId);
        return {
          id: label,
          label,
          respondents: items.length,
          sampleSize: result.denominator,
          value: result.value,
          delta:
            result.value !== null && cohortMetric.value !== null
              ? result.value - cohortMetric.value
              : null,
        };
      })
      .filter((entry) => entry.value !== null)
      .sort((left, right) => {
        if (right.value !== left.value) {
          return right.value - left.value;
        }
        return left.label.localeCompare(right.label);
      });
  }

  function aggregateByState(respondents, metricId) {
    const grouped = new Map();
    respondents.forEach((respondent) => {
      if (!grouped.has(respondent.state)) {
        grouped.set(respondent.state, []);
      }
      grouped.get(respondent.state).push(respondent);
    });

    return Array.from(grouped.entries())
      .map(([stateAbbr, items]) => {
        const result = computeMetric(items, metricId);
        return {
          id: stateAbbr,
          label: data.stateNames[stateAbbr],
          respondents: items.length,
          sampleSize: result.denominator,
          value: result.value,
          numerator: result.numerator,
        };
      })
      .filter((entry) => entry.value !== null)
      .sort((left, right) => {
        if (right.value !== left.value) {
          return right.value - left.value;
        }
        return left.label.localeCompare(right.label);
      });
  }

  function getThemeDistribution(respondents, questionId) {
    const counts = new Map();
    const responses = respondents
      .map((respondent) => respondent.openResponses[questionId])
      .filter(Boolean);

    responses.forEach((response) => {
      response.themes.forEach((themeId) => {
        counts.set(themeId, (counts.get(themeId) || 0) + 1);
      });
    });

    const items = Array.from(counts.entries())
      .map(([themeId, count]) => ({
        themeId,
        count,
        share: responses.length ? (count / responses.length) * 100 : 0,
      }))
      .sort((left, right) => {
        if (right.count !== left.count) {
          return right.count - left.count;
        }
        return themeById.get(left.themeId).label.localeCompare(themeById.get(right.themeId).label);
      });

    const stanceCounter = new Map();
    responses.forEach((response) => {
      if (!response.stance || response.stance === "not_scored") {
        return;
      }
      stanceCounter.set(response.stance, (stanceCounter.get(response.stance) || 0) + 1);
    });

    const stances = Array.from(stanceCounter.entries())
      .map(([label, count]) => ({ label, count }))
      .sort((left, right) => right.count - left.count);

    return {
      responseCount: responses.length,
      items,
      stances,
    };
  }

  function getQuotes(cohort, focused, questionId, themeId) {
    const source =
      state.focusState === "all"
        ? cohort
        : [...focused, ...cohort.filter((item) => item.state !== state.focusState)];
    const quotes = [];

    source.forEach((respondent) => {
      const response = respondent.openResponses[questionId];
      if (!response) {
        return;
      }
      if (themeId && !response.themes.includes(themeId)) {
        return;
      }
      quotes.push({
        text: response.text,
        themes: response.themes,
        stateName: respondent.stateName,
        state: respondent.state,
        questionLabel: textQuestionById.get(questionId).label,
      });
    });

    const deduped = [];
    const seen = new Set();
    quotes
      .sort((left, right) => {
        const focusBoostLeft = left.state === state.focusState ? 0 : 1;
        const focusBoostRight = right.state === state.focusState ? 0 : 1;
        if (focusBoostLeft !== focusBoostRight) {
          return focusBoostLeft - focusBoostRight;
        }
        return Math.abs(left.text.length - 180) - Math.abs(right.text.length - 180);
      })
      .forEach((quote) => {
        if (seen.has(quote.text)) {
          return;
        }
        seen.add(quote.text);
        deduped.push(quote);
      });

    return deduped.slice(0, 5);
  }

  function getTopListItem(respondents, listKey) {
    return getTopListItems(respondents, listKey, 1)[0] || null;
  }

  function getTopListItems(respondents, listKey, limit) {
    const counts = new Map();
    respondents.forEach((respondent) => {
      (respondent.lists[listKey] || []).forEach((item) => {
        counts.set(item, (counts.get(item) || 0) + 1);
      });
    });

    return Array.from(counts.entries())
      .sort((left, right) => {
        if (right[1] !== left[1]) {
          return right[1] - left[1];
        }
        return left[0].localeCompare(right[0]);
      })
      .slice(0, limit)
      .map(([label, count]) => ({ label, count }));
  }

  function generateFindings(cohort, focused) {
    if (cohort.length < 6) {
      return [];
    }

    const findings = [];
    const question = textQuestionById.get(state.textQuestion);
    const questionLabel = question ? lowercaseFirst(question.label) : "this story lens";
    const biggestGap = getLargestGroupGap(cohort);
    if (biggestGap) {
      findings.push({
        priority: 92,
        kind: "Pattern",
        tone: "positive",
        title: `${biggestGap.metricLabel} splits most by ${biggestGap.groupLabel.toLowerCase()}`,
        body: `${biggestGap.top.label} sits highest while ${biggestGap.bottom.label} sits lowest in the current cohort.`,
        why: "This is the fastest way to see which segment changes the story most.",
        evidence: `${biggestGap.top.label} ${formatMetricValue(biggestGap.metricId, biggestGap.top.value)} vs ${biggestGap.bottom.label} ${formatMetricValue(biggestGap.metricId, biggestGap.bottom.value)}`,
        signal: describeSignalStrength(Math.min(biggestGap.top.sampleSize, biggestGap.bottom.sampleSize), biggestGap.metricId, "compare"),
        sample: `${sampleLabel(Math.min(biggestGap.top.sampleSize, biggestGap.bottom.sampleSize), biggestGap.metricId)} at the edge groups`,
        actionLabel: "Open compare view",
        action: {
          tab: "compare",
          compareMetric: biggestGap.metricId,
          compareGroup: biggestGap.groupId,
        },
      });
    }

    const storyDistribution = getThemeDistribution(cohort, state.textQuestion);
    const dominantStoryTheme = storyDistribution.items[0];
    if (
      dominantStoryTheme &&
      getSignalMeta(storyDistribution.responseCount, `theme:${dominantStoryTheme.themeId}`, "text").calloutEligible
    ) {
      findings.push({
        priority: 84,
        kind: "Theme",
        tone: "neutral",
        title: `${themeById.get(dominantStoryTheme.themeId).label} leads this story lens`,
        body: `It appears more often than any other coded idea in responses to ${questionLabel}.`,
        why: "This gives you the clearest narrative thread before reading individual quotes.",
        evidence: `${formatPercent(dominantStoryTheme.share)} of ${formatInteger(storyDistribution.responseCount)} coded responses on this lens`,
        signal: describeSignalStrength(storyDistribution.responseCount, `theme:${dominantStoryTheme.themeId}`, "text"),
        sample: sampleLabel(storyDistribution.responseCount, `theme:${dominantStoryTheme.themeId}`),
        actionLabel: "Open evidence",
        action: {
          tab: "evidence",
          textQuestion: state.textQuestion,
          theme: dominantStoryTheme.themeId,
        },
      });
    }

    const topBarrier = getTopListItem(cohort, "supportChallenges");
    const topResource = getTopListItem(cohort, "resourcesNeeded");
    if (
      (topBarrier || topResource) &&
      getSignalMeta(cohort.length, "usesAiForTeaching", "general").calloutEligible
    ) {
      findings.push({
        priority: 79,
        kind: "Need",
        tone: "caution",
        title: `${topBarrier ? topBarrier.label : "Support needs"}${topBarrier && topResource ? " pairs with " : ""}${topResource ? topResource.label.toLowerCase() : ""}`,
        body: `${topBarrier ? "The biggest barrier" : "A practical constraint"}${topBarrier && topResource ? " lines up with " : " is paired with "}${topResource ? "a concrete request for support." : "clear implementation needs."}`,
        why: "This turns open-ended concern into an action-oriented support picture.",
        evidence: `${topBarrier ? `${formatInteger(topBarrier.count)} barrier mentions` : ""}${topBarrier && topResource ? " • " : ""}${topResource ? `${formatInteger(topResource.count)} support mentions` : ""}`,
        signal: describeSignalStrength(cohort.length, "usesAiForTeaching", "general"),
        sample: sampleLabel(cohort.length, "usesAiForTeaching"),
        actionLabel: "Open evidence",
        action: {
          tab: "evidence",
        },
      });
    }

    const positiveAi = cohort.filter((respondent) => respondent.aiAttitudeBand === "Positive");
    const negativeAi = cohort.filter((respondent) => respondent.aiAttitudeBand === "Negative");
    const positiveDistribution = getThemeDistribution(positiveAi, state.textQuestion);
    const negativeDistribution = getThemeDistribution(negativeAi, state.textQuestion);
    const positiveThemes = positiveDistribution.items;
    const negativeThemes = negativeDistribution.items;
    const attitudeThemeSample = Math.min(
      positiveDistribution.responseCount,
      negativeDistribution.responseCount,
    );
    if (
      getSignalMeta(attitudeThemeSample, "theme:creativity", "text").calloutEligible &&
      positiveThemes.length &&
      negativeThemes.length &&
      positiveThemes[0].themeId !== negativeThemes[0].themeId
    ) {
      findings.push({
        priority: 81,
        kind: "Tension",
        tone: "neutral",
        title: "AI attitude groups emphasize different themes on this lens",
        body: `${themeById.get(positiveThemes[0].themeId).label} leads among respondents with positive AI attitudes, while ${themeById.get(negativeThemes[0].themeId).label.toLowerCase()} leads among respondents with negative AI attitudes.`,
        why: `This shows how broader AI orientation changes what people emphasize when answering ${questionLabel}.`,
        evidence: `${formatInteger(positiveDistribution.responseCount)} positive-attitude vs ${formatInteger(negativeDistribution.responseCount)} negative-attitude coded responses`,
        signal: describeSignalStrength(attitudeThemeSample, `theme:${positiveThemes[0].themeId}`, "text"),
        sample: `${sampleLabel(positiveDistribution.responseCount, `theme:${positiveThemes[0].themeId}`)} positive • ${sampleLabel(negativeDistribution.responseCount, `theme:${negativeThemes[0].themeId}`)} negative`,
        actionLabel: "Open evidence",
        action: {
          tab: "evidence",
          textQuestion: state.textQuestion,
          theme: positiveThemes[0].themeId,
        },
      });
    }

    const aiUseShare = computeMetric(cohort, "usesAiForTeaching");
    const concernShare = computeMetric(cohort, "highEthicalConcern");
    if (
      aiUseShare.value !== null &&
      concernShare.value !== null &&
      getSignalMeta(Math.min(aiUseShare.denominator, concernShare.denominator), "usesAiForTeaching", "general").calloutEligible &&
      aiUseShare.value >= 25 &&
      concernShare.value >= 25
    ) {
      findings.push({
        priority: 74,
        kind: "Tension",
        tone: aiUseShare.value >= concernShare.value ? "positive" : "caution",
        title: "AI use and ethical concern coexist in the same cohort",
        body: `${formatPercent(aiUseShare.value)} say they use AI for teaching tasks, while ${formatPercent(concernShare.value)} also report significant ethical concern.`,
        why: "Adoption here does not imply comfort, which makes the tension worth testing by subgroup.",
        evidence: `${sampleLabel(aiUseShare.denominator, "usesAiForTeaching")} in the current cohort`,
        signal: describeSignalStrength(Math.min(aiUseShare.denominator, concernShare.denominator), "usesAiForTeaching", "general"),
        sample: sampleLabel(aiUseShare.denominator, "usesAiForTeaching"),
        actionLabel: "Compare concern by AI use",
        action: {
          tab: "compare",
          compareMetric: "aiConcern",
          compareGroup: "aiUsageStatus",
        },
      });
    }

    if (state.focusState !== "all") {
      const focusMetric = computeMetric(focused, state.mapMetric);
      const cohortMetric = computeMetric(cohort, state.mapMetric);
      if (
        getSignalMeta(focusMetric.denominator, state.mapMetric, "map").calloutEligible &&
        focusMetric.value !== null &&
        cohortMetric.value !== null
      ) {
        findings.push({
          priority: 100,
          kind: "State",
          tone: focusMetric.value >= cohortMetric.value ? "positive" : "caution",
          title: `${data.stateNames[state.focusState]} ${focusMetric.value >= cohortMetric.value ? "over-indexes" : "under-indexes"} on ${metricById.get(state.mapMetric).label.toLowerCase()}`,
          body: `${data.stateNames[state.focusState]} sits ${formatSigned(focusMetric.value - cohortMetric.value)} against the filtered cohort on the active map lens.`,
          why: "This tells you immediately whether the pinned state is genuinely distinct or roughly aligned with the wider cohort.",
          evidence: `${formatMetricValue(state.mapMetric, focusMetric.value)} in state vs ${formatMetricValue(state.mapMetric, cohortMetric.value)} cohort-wide`,
          signal: describeSignalStrength(focusMetric.denominator, state.mapMetric, "map"),
          sample: sampleLabel(focusMetric.denominator, state.mapMetric),
          actionLabel: "Open map",
          action: {
            tab: "map",
            mapMetric: state.mapMetric,
            focusState: state.focusState,
          },
        });
      }
    } else {
      const stateEntries = aggregateByState(cohort, state.mapMetric).filter((entry) =>
        getSignalMeta(entry.sampleSize, state.mapMetric, "map").calloutEligible,
      );
      if (stateEntries.length) {
        const leader = stateEntries[0];
        findings.push({
          priority: 72,
          kind: "State",
          tone: "positive",
          title: `${leader.label} leads on the current state lens`,
          body: `${leader.label} is the highest-scoring state on ${metricById.get(state.mapMetric).label.toLowerCase()} among states with enough signal.`,
          why: "This gives you a geographic lead to inspect after understanding the main cohort-level patterns.",
          evidence: `${formatMetricValue(state.mapMetric, leader.value)} with ${sampleLabel(leader.sampleSize, state.mapMetric)}`,
          signal: describeSignalStrength(leader.sampleSize, state.mapMetric, "map"),
          sample: `${formatInteger(leader.respondents)} respondents in ${leader.label}`,
          actionLabel: "Open map",
          action: {
            tab: "map",
            mapMetric: state.mapMetric,
            focusState: leader.id,
          },
        });
      }
    }

    const readinessMetrics = ["aiReadiness", "digitalReadiness", "mediaArtsReadiness"];
    const readinessSnapshots = readinessMetrics
      .map((metricId) => ({
        metric: metricById.get(metricId),
        result: computeMetric(cohort, metricId),
      }))
      .filter((entry) => entry.result.value !== null)
      .sort((left, right) => right.result.value - left.result.value);

    if (readinessSnapshots.length >= 2) {
      const strongest = readinessSnapshots[0];
      const weakest = readinessSnapshots[readinessSnapshots.length - 1];
      if (getSignalMeta(Math.min(strongest.result.denominator, weakest.result.denominator), strongest.metric.id, "general").calloutEligible) {
        findings.push({
          priority: 64,
          kind: "Pattern",
          tone: "positive",
          title: `${strongest.metric.label} is ahead of ${weakest.metric.label.toLowerCase()} in this cohort`,
          body: `The readiness profile looks most mature on ${strongest.metric.label.toLowerCase()} and weakest on ${weakest.metric.label.toLowerCase()}.`,
          why: "This helps frame the cohort as a set of strengths and weak points instead of a single average score.",
          evidence: `${formatMetricValue(strongest.metric.id, strongest.result.value)} vs ${formatMetricValue(weakest.metric.id, weakest.result.value)}`,
          signal: describeSignalStrength(Math.min(strongest.result.denominator, weakest.result.denominator), strongest.metric.id, "general"),
          sample: `${sampleLabel(Math.min(strongest.result.denominator, weakest.result.denominator), strongest.metric.id)} across the readiness scores`,
          actionLabel: "Compare the strongest readiness score",
          action: {
            tab: "compare",
            compareMetric: strongest.metric.id,
            compareGroup: biggestGap ? biggestGap.groupId : "teachingBand",
          },
        });
      }
    }

    return findings
      .sort((left, right) => right.priority - left.priority)
      .slice(0, 6);
  }

  function getLargestGroupGap(cohort) {
    const candidateMetrics = [
      "aiReadiness",
      "digitalReadiness",
      "mediaArtsReadiness",
      "aiConcern",
      "usesAiForTeaching",
      "highEthicalConcern",
    ];

    let biggestGap = null;
    data.compareGroups.forEach((group) => {
      candidateMetrics.forEach((metricId) => {
        const entries = aggregateByGroup(cohort, group.id, metricId).filter((entry) =>
          getSignalMeta(entry.sampleSize, metricId, "compare").calloutEligible,
        );
        if (entries.length < 2) {
          return;
        }
        const gap = entries[0].value - entries[entries.length - 1].value;
        if (!biggestGap || gap > biggestGap.gap) {
          biggestGap = {
            gap,
            groupId: group.id,
            groupLabel: group.label,
            metricId,
            metricLabel: metricById.get(metricId).label,
            top: entries[0],
            bottom: entries[entries.length - 1],
          };
        }
      });
    });
    return biggestGap;
  }

  function handleStateHover(event) {
    const stateAbbr = event.currentTarget.dataset.state;
    const stateEntry = latestStateMetrics.find((entry) => entry.id === stateAbbr);
    if (!stateEntry) {
      showTooltip(event, stateAbbr, "No respondents in the current cohort for this state.");
      return;
    }
    showTooltip(event, stateAbbr, buildStateTooltip(stateEntry, metricById.get(state.mapMetric)));
  }

  function handleStateClick(event) {
    const stateAbbr = event.currentTarget.dataset.state;
    state.focusState = state.focusState === stateAbbr ? "all" : stateAbbr;
    renderAll();
  }

  function handleStateKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    handleStateClick(event);
  }

  function showTooltip(event, stateAbbr, bodyText) {
    dom.mapTooltip.hidden = false;
    dom.mapTooltip.innerHTML = `
      <strong>${escapeHtml(data.stateNames[stateAbbr] || stateAbbr)}</strong>
      ${bodyText
        .split("\n")
        .map((line) => `<span>${escapeHtml(line)}</span>`)
        .join("")}
    `;

    const bounds = dom.mapStage.getBoundingClientRect();
    dom.mapTooltip.style.left = `${event.clientX - bounds.left}px`;
    dom.mapTooltip.style.top = `${event.clientY - bounds.top}px`;
  }

  function hideTooltip() {
    dom.mapTooltip.hidden = true;
  }

  function buildStateTooltip(entry, metric, cohortValue) {
    const signalMeta = getSignalMeta(entry.sampleSize, metric.id, "map");
    const delta =
      entry.value !== null && cohortValue !== null && cohortValue !== undefined
        ? entry.value - cohortValue
        : null;
    return `${formatMetricValue(metric.id, entry.value)} on ${metric.label.toLowerCase()}.\n${delta === null ? "No cohort delta available." : `${formatSigned(delta)} versus the filtered cohort.`}\n${formatInteger(entry.respondents)} respondents in the current cohort.\n${sampleLabel(entry.sampleSize, metric.id)} used for this lens.\n${signalMeta.label}${signalMeta.calloutEligible ? "" : " - faded on the map."}\nUse the ranking lane for precise comparison.`;
  }

  function resolveMapFill(value, maxValue) {
    if (value === null || value === undefined) {
      return getCssVariable("--map-empty");
    }
    if (value === 0) {
      return "rgb(94, 115, 127)";
    }
    const scale = maxValue > 0 ? value / maxValue : 0;
    return interpolateColor([239, 216, 184], [199, 104, 61], scale);
  }

  function shiftRgb(colorValue, amount) {
    const match = String(colorValue).match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/i);
    if (!match) {
      return colorValue;
    }
    const channels = match.slice(1).map((value) => Number(value));
    const next = channels.map((channel) =>
      Math.max(0, Math.min(255, Math.round(channel + (amount >= 0 ? (255 - channel) * amount : channel * amount)))),
    );
    return `rgb(${next.join(", ")})`;
  }

  function widthForValue(value) {
    if (value === null || value === undefined) {
      return 0;
    }
    return Math.max(0, Math.min(100, value));
  }

  function getMaxAbsDelta(entries) {
    const max = Math.max(
      ...entries
        .map((entry) => Math.abs(entry.delta || 0))
        .filter((value) => Number.isFinite(value)),
      0,
    );
    return max || 1;
  }

  function bubbleScaleForSample(sampleSize, context) {
    const rules = context === "compare" ? qualityGuidance.compare : qualityGuidance.state;
    const clamped = Math.max(rules.displayMinimum, Math.min(sampleSize || 0, rules.strongMinimum));
    return ((clamped - rules.displayMinimum) / Math.max(1, rules.strongMinimum - rules.displayMinimum)) * 0.8 + 0.7;
  }

  function getSignalMeta(sampleSize, metricId, context) {
    const rules = getQualityRules(metricId, context);
    if (!sampleSize || sampleSize < rules.displayMinimum) {
      return {
        visible: false,
        calloutEligible: false,
        label: "Insufficient sample",
        tone: "weak",
      };
    }
    if (sampleSize < rules.directionalMinimum) {
      return {
        visible: true,
        calloutEligible: false,
        label: "Small sample",
        tone: "weak",
      };
    }
    if (sampleSize < rules.strongMinimum) {
      return {
        visible: true,
        calloutEligible: true,
        label: "Directional signal",
        tone: "directional",
      };
    }
    return {
      visible: true,
      calloutEligible: true,
      label: "Stronger signal",
      tone: "strong",
    };
  }

  function getQualityRules(metricId, context) {
    const metric = metricById.get(metricId);
    if (context === "map") {
      return qualityGuidance.state;
    }
    if (context === "compare") {
      return qualityGuidance.compare;
    }
    if (context === "text" || (metric && metric.denominator === "text")) {
      return qualityGuidance.text;
    }
    return qualityGuidance.general;
  }

  function sampleLabel(sampleSize, metricId) {
    const metric = metricById.get(metricId);
    if (!sampleSize) {
      return "n=0";
    }
    if (String(metricId).startsWith("theme:")) {
      return `n=${formatInteger(sampleSize)} coded-text respondents`;
    }
    if (metric && metric.denominator === "text") {
      return `n=${formatInteger(sampleSize)} coded-text respondents`;
    }
    if (metric && metric.type === "score") {
      return `n=${formatInteger(sampleSize)} scored respondents`;
    }
    return `n=${formatInteger(sampleSize)} respondents`;
  }

  function describeSample(metricId, result) {
    return sampleLabel(result.denominator, metricId);
  }

  function describeSignalStrength(sampleSize, metricId, context) {
    return getSignalMeta(sampleSize, metricId, context).label;
  }

  function makeStatCard(label, value, note) {
    return `
      <div class="stat-card">
        <span class="stat-card-label">${escapeHtml(label)}</span>
        <span class="stat-card-value">${escapeHtml(String(value))}</span>
        <span class="stat-card-note">${escapeHtml(note)}</span>
      </div>
    `;
  }

  function makeMiniCard(label, value, note) {
    return `
      <div class="mini-card">
        <span class="mini-card-label">${escapeHtml(label)}</span>
        <span class="mini-card-value">${escapeHtml(String(value))}</span>
        <span class="mini-card-note">${escapeHtml(note)}</span>
      </div>
    `;
  }

  function makeMethodCard(label, kind, note, components) {
    return `
      <article class="method-card">
        <span class="method-label">${escapeHtml(label)}</span>
        <span class="method-kind">${escapeHtml(kind)}</span>
        <p class="method-note">${escapeHtml(note)}</p>
        <div class="method-component-list">
          ${(components || [])
            .map((component) => `<span class="method-component">${escapeHtml(component)}</span>`)
            .join("")}
        </div>
      </article>
    `;
  }

  function makeDeltaRow({
    label,
    sublabel,
    valueLabel,
    deltaValue,
    maxDelta,
    deltaLabel,
    selected,
    badgeLabel,
    badgeTone,
    muted,
  }) {
    const safeMax = maxDelta || 1;
    const deltaWidth = deltaValue === null || deltaValue === undefined ? 0 : (Math.abs(deltaValue) / safeMax) * 48;
    const left = deltaValue === null || deltaValue === undefined
      ? 50
      : deltaValue >= 0
        ? 50
        : 50 - deltaWidth;
    const dotLeft = deltaValue === null || deltaValue === undefined
      ? 50
      : deltaValue >= 0
        ? 50 + deltaWidth
        : 50 - deltaWidth;
    return `
      <div class="delta-row ${selected ? "is-selected" : ""} ${muted ? "is-muted" : ""}">
        <div class="bar-row-head">
          <div class="bar-label">
            ${escapeHtml(label)}
            ${sublabel ? `<small>${escapeHtml(sublabel)}</small>` : ""}
          </div>
          <div class="bar-value-wrap">
            ${badgeLabel ? `<span class="mini-signal-pill ${escapeAttribute(badgeTone || "neutral")}">${escapeHtml(badgeLabel)}</span>` : ""}
            <div class="bar-value">${escapeHtml(valueLabel)}</div>
          </div>
        </div>
        <div class="delta-track">
          <span class="delta-baseline"></span>
          ${deltaValue === null || deltaValue === undefined ? "" : `<span class="delta-band ${deltaValue >= 0 ? "positive" : "negative"}" style="left:${left}%; width:${deltaWidth}%"></span>`}
          <span class="delta-dot ${deltaValue >= 0 ? "positive" : "negative"}" style="left:${dotLeft}%"></span>
        </div>
        ${deltaLabel ? `<div class="delta-note">${escapeHtml(deltaLabel)}</div>` : ""}
      </div>
    `;
  }

  function makePositionRow({
    label,
    sublabel,
    value,
    baseline,
    valueLabel,
    selected,
    badgeLabel,
    badgeTone,
    bubbleScale,
    muted,
  }) {
    return `
      <div class="position-row ${selected ? "is-selected" : ""} ${muted ? "is-muted" : ""}">
        <div class="bar-row-head">
          <div class="bar-label">
            ${escapeHtml(label)}
            ${sublabel ? `<small>${escapeHtml(sublabel)}</small>` : ""}
          </div>
          <div class="bar-value-wrap">
            ${badgeLabel ? `<span class="mini-signal-pill ${escapeAttribute(badgeTone || "neutral")}">${escapeHtml(badgeLabel)}</span>` : ""}
            <div class="bar-value">${escapeHtml(valueLabel)}</div>
          </div>
        </div>
        <div class="position-track">
          ${baseline === null || baseline === undefined ? "" : `<span class="position-baseline" style="left:${widthForValue(baseline)}%"></span>`}
          <span class="position-dot" style="left:${widthForValue(value)}%; --bubble-scale:${bubbleScale || 1};"></span>
        </div>
      </div>
    `;
  }

  function makeBarRow({ label, sublabel, valueLabel, width, deltaLabel, selected, badgeLabel, badgeTone, muted }) {
    return `
      <div class="bar-row ${selected ? "is-selected" : ""} ${muted ? "is-muted" : ""}">
        <div class="bar-row-head">
          <div class="bar-label">
            ${escapeHtml(label)}
            ${sublabel ? `<small>${escapeHtml(sublabel)}</small>` : ""}
          </div>
          <div class="bar-value-wrap">
            ${badgeLabel ? `<span class="mini-signal-pill ${escapeAttribute(badgeTone || "neutral")}">${escapeHtml(badgeLabel)}</span>` : ""}
            <div class="bar-value">${escapeHtml(valueLabel)}</div>
          </div>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        ${deltaLabel ? `<div class="delta-note">${escapeHtml(deltaLabel)}</div>` : ""}
      </div>
    `;
  }

  function makeInsightCard({ tone, title, body, evidence }) {
    return `
      <div class="insight-card ${escapeAttribute(tone || "neutral")}">
        <span class="insight-title">${escapeHtml(title)}</span>
        <span class="insight-body">${escapeHtml(body)}</span>
        <span class="insight-evidence">${escapeHtml(evidence)}</span>
      </div>
    `;
  }

  function makeFeatureFinding(finding) {
    return `
      <article class="finding-card featured ${escapeAttribute(finding.tone || "neutral")}">
        <div class="finding-head">
          <span class="finding-kind">${escapeHtml(finding.kind)}</span>
          <span class="signal-pill">${escapeHtml(finding.signal)}</span>
        </div>
        <h3 class="finding-title">${escapeHtml(finding.title)}</h3>
        <p class="finding-body">${escapeHtml(finding.body)}</p>
        <p class="finding-why">${escapeHtml(`Why it matters: ${finding.why}`)}</p>
        ${makeFindingContext(finding)}
        <div class="finding-meta">
          <span>${escapeHtml(finding.evidence)}</span>
          <span>${escapeHtml(finding.sample)}</span>
        </div>
        ${makeActionButton(finding)}
      </article>
    `;
  }

  function makeFindingCard(finding, options) {
    const compact = options && options.compact;
    return `
      <article class="finding-card ${compact ? "compact" : ""} ${escapeAttribute(finding.tone || "neutral")}">
        <div class="finding-head">
          <span class="finding-kind">${escapeHtml(finding.kind)}</span>
          <span class="signal-pill">${escapeHtml(finding.signal)}</span>
        </div>
        <h3 class="finding-title">${escapeHtml(finding.title)}</h3>
        <p class="finding-body">${escapeHtml(finding.body)}</p>
        <p class="finding-why">${escapeHtml(`Why it matters: ${finding.why}`)}</p>
        ${makeFindingContext(finding)}
        <div class="finding-meta">
          <span>${escapeHtml(finding.evidence)}</span>
          <span>${escapeHtml(finding.sample)}</span>
        </div>
        ${makeActionButton(finding)}
      </article>
    `;
  }

  function makeRouteCard(finding, stepNumber) {
    return `
      <article class="route-card">
        <span class="route-step">Route ${escapeHtml(String(stepNumber))}</span>
        <h3>${escapeHtml(finding.title)}</h3>
        <p>${escapeHtml(finding.why)}</p>
        ${makeActionButton(finding)}
      </article>
    `;
  }

  function makeActionButton(finding) {
    if (!finding.action || !finding.actionLabel) {
      return "";
    }
    return `
      <button class="ghost-button finding-action js-action" type="button" ${buildActionAttributes(finding.action)}>
        ${escapeHtml(finding.actionLabel)}
      </button>
    `;
  }

  function makeFindingContext(finding) {
    const basis = getFindingBasisLabel(finding);
    const caution = getFindingCautionLabel(finding);
    if (!basis && !caution) {
      return "";
    }

    const chips = [basis, caution]
      .filter(Boolean)
      .map((label) => `<span class="finding-context-chip">${escapeHtml(label)}</span>`)
      .join("");

    return `<div class="finding-context">${chips}</div>`;
  }

  function getFindingBasisLabel(finding) {
    if (!finding || !finding.kind) {
      return "";
    }
    if (finding.kind === "Theme" || finding.kind === "Tension") {
      return "Basis: interpretive theme coding";
    }
    if (finding.kind === "Need") {
      return "Basis: ranked mention counts";
    }
    if (finding.kind === "State") {
      return "Basis: descriptive state comparison";
    }
    return "Basis: descriptive grouped comparison";
  }

  function getFindingCautionLabel(finding) {
    if (!finding || !finding.kind) {
      return "";
    }
    if (finding.kind === "Theme" || finding.kind === "Tension") {
      return "Read with quotes for nuance";
    }
    if (finding.kind === "Need") {
      return "Prominence, not priority";
    }
    if (finding.kind === "State") {
      return "Map for context, list for precision";
    }
    return "Not causal";
  }

  function makeSimpleList(items, unitLabel, emptyMessage) {
    if (!items.length) {
      return `<p class="empty-state">${escapeHtml(emptyMessage)}</p>`;
    }
    return items
      .map(
        (item, index) => `
          <div class="list-row">
            <span class="list-rank">${escapeHtml(String(index + 1))}</span>
            <div class="list-copy">
              <span class="list-label">${escapeHtml(item.label)}</span>
              <span class="list-meta">${escapeHtml(`${formatInteger(item.count)} ${unitLabel}`)}</span>
            </div>
          </div>
        `,
      )
      .join("");
  }

  function makeFilterChip(label, value) {
    return `
      <span class="filter-chip">
        <span class="filter-chip-label">${escapeHtml(label)}</span>
        <span class="filter-chip-value">${escapeHtml(value)}</span>
      </span>
    `;
  }

  function buildActionAttributes(action) {
    return Object.entries(action)
      .filter(([, value]) => value !== undefined && value !== null && value !== "")
      .map(
        ([key, value]) =>
          `data-action-${camelToKebab(key)}="${escapeAttribute(String(value))}"`,
      )
      .join(" ");
  }

  function camelToKebab(value) {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }

  function formatMetricValue(metricId, value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "-";
    }
    const metric = metricById.get(metricId);
    if (!metric) {
      return formatNumber(value);
    }
    if (metric.format === "percent") {
      return formatPercent(value);
    }
    return formatNumber(value);
  }

  function formatPercent(value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "-";
    }
    return `${Number(value).toFixed(1)}%`;
  }

  function formatNumber(value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "-";
    }
    return Number(value).toFixed(1);
  }

  function formatSigned(value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "-";
    }
    const formatted = Number(value).toFixed(1);
    return `${value >= 0 ? "+" : ""}${formatted}`;
  }

  function formatInteger(value) {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value || 0);
  }

  function formatWindow(windowRange) {
    if (!windowRange || !windowRange.start || !windowRange.end) {
      return "-";
    }
    return `${windowRange.start} to ${windowRange.end}`;
  }

  function capitalize(value) {
    if (!value) {
      return "";
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function lowercaseFirst(value) {
    if (!value) {
      return "";
    }
    return value.charAt(0).toLowerCase() + value.slice(1);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("'", "&#39;");
  }

  function getCssVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function interpolateColor(start, end, amount) {
    const clamped = Math.max(0, Math.min(1, amount));
    const channels = start.map((value, index) =>
      Math.round(value + (end[index] - value) * clamped),
    );
    return `rgb(${channels.join(", ")})`;
  }

  init();
})();
