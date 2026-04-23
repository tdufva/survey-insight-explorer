window.SURVEY_DASHBOARD_DATA = {
  "title": "Digital Technology, AI, and Media Arts Insight Explorer",
  "subtitle": "Analyst dashboard, theme explorer, and insight finder for mapped U.S. survey responses.",
  "sourceWorkbook": "Survey data-0204 (for interview selection-updated)(automatiskt återställd).xlsx",
  "sourceReport": "NAEF Report.pdf",
  "generatedAt": "2026-04-23 04:20 UTC",
  "surveyWindow": {
    "start": "2024-11-21",
    "end": "2025-02-02"
  },
  "methodNote": "This is one survey wave rather than a longitudinal panel, so the strongest signals are cross-state and cross-segment patterns rather than long-term change over time.",
  "respondentCount": 148,
  "statesRepresented": 36,
  "stateNames": {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District of Columbia",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  },
  "stateCoverage": {
    "CA": 18,
    "TX": 14,
    "FL": 9,
    "NY": 9,
    "GA": 8,
    "OH": 7,
    "IL": 6,
    "MD": 6,
    "NC": 6,
    "PA": 6,
    "NM": 5,
    "SC": 5,
    "MA": 4,
    "MO": 4,
    "AL": 3,
    "CT": 3,
    "DE": 3,
    "NH": 3,
    "OK": 3,
    "WA": 3,
    "AK": 2,
    "IN": 2,
    "KY": 2,
    "NE": 2,
    "OR": 2,
    "VA": 2,
    "WI": 2,
    "AZ": 1,
    "CO": 1,
    "HI": 1,
    "KS": 1,
    "MN": 1,
    "NV": 1,
    "NJ": 1,
    "VT": 1,
    "WV": 1
  },
  "collectionTimeline": [
    {
      "month": "2024-11",
      "count": 5
    },
    {
      "month": "2024-12",
      "count": 47
    },
    {
      "month": "2025-01",
      "count": 95
    },
    {
      "month": "2025-02",
      "count": 1
    }
  ],
  "filterCatalog": {
    "schoolType": [
      "Public",
      "Private",
      "Charter",
      "Other"
    ],
    "teachingBand": [
      "Elementary",
      "Middle",
      "High School",
      "Multi-level",
      "Other"
    ],
    "experienceBand": [
      "0-3 years",
      "4-6 years",
      "7-10 years",
      "11-15 years",
      "16-20 years",
      "20 + years"
    ],
    "mediaArtsBackground": [
      "Yes",
      "No",
      "Unspecified"
    ],
    "aiUsageStatus": [
      "Active classroom AI use",
      "Personal AI use",
      "Interested, not yet using",
      "Other"
    ]
  },
  "filterFields": [
    {
      "id": "schoolType",
      "label": "School type"
    },
    {
      "id": "teachingBand",
      "label": "Teaching band"
    },
    {
      "id": "experienceBand",
      "label": "Teaching experience"
    },
    {
      "id": "mediaArtsBackground",
      "label": "Media arts background"
    }
  ],
  "compareGroups": [
    {
      "id": "schoolType",
      "label": "School type"
    },
    {
      "id": "teachingBand",
      "label": "Teaching band"
    },
    {
      "id": "experienceBand",
      "label": "Teaching experience"
    },
    {
      "id": "mediaArtsBackground",
      "label": "Media arts background"
    },
    {
      "id": "aiUsageStatus",
      "label": "AI usage status"
    }
  ],
  "metricCatalog": [
    {
      "id": "aiReadiness",
      "label": "AI readiness",
      "type": "score",
      "field": "aiReadiness",
      "description": "Composite of overall AI attitude, AI comfort, and AI relevance.",
      "format": "score"
    },
    {
      "id": "digitalReadiness",
      "label": "Digital readiness",
      "type": "score",
      "field": "digitalReadiness",
      "description": "Composite of digital integration, digital confidence, and support readiness.",
      "format": "score"
    },
    {
      "id": "mediaArtsReadiness",
      "label": "Media arts readiness",
      "type": "score",
      "field": "mediaArtsReadiness",
      "description": "Composite of media arts adoption, standards familiarity, and media arts background.",
      "format": "score"
    },
    {
      "id": "aiConcern",
      "label": "AI concern",
      "type": "score",
      "field": "aiConcern",
      "description": "Strength of ethical concern around AI use in art education.",
      "format": "score"
    },
    {
      "id": "digitalConfidence",
      "label": "Digital confidence",
      "type": "score",
      "field": "digitalConfidence",
      "description": "Self-reported confidence using digital technologies in teaching.",
      "format": "score"
    },
    {
      "id": "mediaArtsAdoption",
      "label": "Media arts adoption",
      "type": "score",
      "field": "mediaArtsAdoption",
      "description": "Frequency of integrating media arts techniques or tools into teaching.",
      "format": "score"
    },
    {
      "id": "supportReadiness",
      "label": "Support readiness",
      "type": "score",
      "field": "supportReadiness",
      "description": "Reported level of school or district support for digital, media arts, and AI integration.",
      "format": "score"
    },
    {
      "id": "usesAiForTeaching",
      "label": "Share using AI for teaching tasks",
      "type": "share",
      "field": "usesAiForTeaching",
      "source": "flag",
      "description": "Share of respondents who say they use AI tools sometimes or regularly for teaching tasks.",
      "format": "percent",
      "denominator": "all"
    },
    {
      "id": "highEthicalConcern",
      "label": "Share reporting significant ethical concern",
      "type": "share",
      "field": "highEthicalConcern",
      "source": "flag",
      "description": "Share of respondents selecting “Yes, significant concerns” for AI ethics.",
      "format": "percent",
      "denominator": "all"
    },
    {
      "id": "teachesMediaArts",
      "label": "Share teaching media arts",
      "type": "share",
      "field": "teachesMediaArts",
      "source": "flag",
      "description": "Share of respondents who report teaching media arts or using media arts standards.",
      "format": "percent",
      "denominator": "all"
    },
    {
      "id": "theme:creativity",
      "label": "Theme mention: Creativity & ideation",
      "type": "share",
      "source": "theme",
      "themeId": "creativity",
      "description": "AI or digital tools are framed as a spark for new ideas, references, iteration, or possibility.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:efficiency",
      "label": "Theme mention: Planning & workflow",
      "type": "share",
      "source": "theme",
      "themeId": "efficiency",
      "description": "The response emphasizes planning, workflow efficiency, administrative help, or faster production.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:ethics",
      "label": "Theme mention: Ethics & authorship",
      "type": "share",
      "source": "theme",
      "themeId": "ethics",
      "description": "The response raises originality, copyright, authorship, ownership, bias, or misinformation concerns.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:skillLoss",
      "label": "Theme mention: Skill loss & over-reliance",
      "type": "share",
      "source": "theme",
      "themeId": "skillLoss",
      "description": "The response worries that AI shortcuts or over-reliance could weaken skill-building or creative struggle.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:access",
      "label": "Theme mention: Access & inclusion",
      "type": "share",
      "source": "theme",
      "themeId": "access",
      "description": "The response points to accessibility, support for varied learners, differentiation, or lowering barriers to participation.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:engagement",
      "label": "Theme mention: Student engagement",
      "type": "share",
      "source": "theme",
      "themeId": "engagement",
      "description": "The response centers on student interest, motivation, reflection, parent visibility, or stronger participation.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:training",
      "label": "Theme mention: Training & teacher growth",
      "type": "share",
      "source": "theme",
      "themeId": "training",
      "description": "The response references coursework, workshops, comfort-building, research, or professional development.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:barriers",
      "label": "Theme mention: Barriers & policy limits",
      "type": "share",
      "source": "theme",
      "themeId": "barriers",
      "description": "The response describes blocking policies, district hesitation, budget limits, or tool constraints.",
      "format": "percent",
      "denominator": "text"
    },
    {
      "id": "theme:making",
      "label": "Theme mention: Media-making workflows",
      "type": "share",
      "source": "theme",
      "themeId": "making",
      "description": "The response describes concrete creative workflows, projects, or production tools used in classrooms.",
      "format": "percent",
      "denominator": "text"
    }
  ],
  "qualityGuidance": {
    "general": {
      "displayMinimum": 2,
      "directionalMinimum": 8,
      "strongMinimum": 18
    },
    "compare": {
      "displayMinimum": 2,
      "directionalMinimum": 8,
      "strongMinimum": 15
    },
    "state": {
      "displayMinimum": 2,
      "directionalMinimum": 4,
      "strongMinimum": 8
    },
    "text": {
      "displayMinimum": 2,
      "directionalMinimum": 5,
      "strongMinimum": 10
    }
  },
  "scoreMethodology": [
    {
      "metricId": "aiReadiness",
      "label": "AI readiness",
      "kind": "Composite average",
      "scaleNote": "Average of available 0-100 normalized components.",
      "components": [
        {
          "id": "aiOpenness",
          "label": "Overall AI attitude"
        },
        {
          "id": "aiComfort",
          "label": "Comfort integrating AI"
        },
        {
          "id": "aiRelevance",
          "label": "Perceived relevance of AI image generators"
        }
      ]
    },
    {
      "metricId": "digitalReadiness",
      "label": "Digital readiness",
      "kind": "Composite average",
      "scaleNote": "Average of available 0-100 normalized components.",
      "components": [
        {
          "id": "digitalIntegration",
          "label": "Current digital integration"
        },
        {
          "id": "digitalConfidence",
          "label": "Confidence using digital tools"
        },
        {
          "id": "supportReadiness",
          "label": "School or district support"
        }
      ]
    },
    {
      "metricId": "mediaArtsReadiness",
      "label": "Media arts readiness",
      "kind": "Composite average",
      "scaleNote": "Average of available 0-100 normalized components, including a binary background indicator.",
      "components": [
        {
          "id": "mediaArtsAdoption",
          "label": "Current media arts adoption"
        },
        {
          "id": "standardsFamiliarity",
          "label": "Media arts standards familiarity"
        },
        {
          "id": "mediaArtsBackgroundBinary",
          "label": "Formal media arts background (Yes=100, No=0)"
        }
      ]
    },
    {
      "metricId": "aiConcern",
      "label": "AI concern",
      "kind": "Single normalized item",
      "scaleNote": "A single survey item mapped to a 0-100 scale from no concern to significant concern.",
      "components": [
        {
          "id": "aiConcern",
          "label": "Reported ethical concern about AI"
        }
      ]
    }
  ],
  "measurementAudit": [
    {
      "metricId": "aiReadiness",
      "label": "AI readiness",
      "kind": "Composite average",
      "sampleSize": 148,
      "scoreCoverage": 148,
      "scoreMean": 62.7,
      "scoreStd": 29.63,
      "componentCount": 3,
      "cronbachAlpha": 0.89,
      "averageInterItemCorrelation": 0.732,
      "reliabilityLabel": "Stronger internal consistency",
      "components": [
        {
          "id": "aiOpenness",
          "label": "Overall AI attitude",
          "coverage": 148,
          "coverageShare": 100.0,
          "mean": 70.1,
          "std": 30.81,
          "itemTotalCorrelation": 0.768
        },
        {
          "id": "aiComfort",
          "label": "Comfort integrating AI",
          "coverage": 148,
          "coverageShare": 100.0,
          "mean": 65.7,
          "std": 32.51,
          "itemTotalCorrelation": 0.824
        },
        {
          "id": "aiRelevance",
          "label": "Perceived relevance of AI image generators",
          "coverage": 148,
          "coverageShare": 100.0,
          "mean": 52.2,
          "std": 34.74,
          "itemTotalCorrelation": 0.77
        }
      ]
    },
    {
      "metricId": "digitalReadiness",
      "label": "Digital readiness",
      "kind": "Composite average",
      "sampleSize": 137,
      "scoreCoverage": 148,
      "scoreMean": 78.1,
      "scoreStd": 18.29,
      "componentCount": 3,
      "cronbachAlpha": 0.618,
      "averageInterItemCorrelation": 0.358,
      "reliabilityLabel": "Moderate internal consistency",
      "components": [
        {
          "id": "digitalIntegration",
          "label": "Current digital integration",
          "coverage": 147,
          "coverageShare": 99.3,
          "mean": 78.7,
          "std": 24.01,
          "itemTotalCorrelation": 0.5
        },
        {
          "id": "digitalConfidence",
          "label": "Confidence using digital tools",
          "coverage": 146,
          "coverageShare": 98.6,
          "mean": 82.9,
          "std": 22.51,
          "itemTotalCorrelation": 0.534
        },
        {
          "id": "supportReadiness",
          "label": "School or district support",
          "coverage": 139,
          "coverageShare": 93.9,
          "mean": 72.5,
          "std": 25.71,
          "itemTotalCorrelation": 0.273
        }
      ]
    },
    {
      "metricId": "mediaArtsReadiness",
      "label": "Media arts readiness",
      "kind": "Composite average",
      "sampleSize": 117,
      "scoreCoverage": 148,
      "scoreMean": 59.0,
      "scoreStd": 35.01,
      "componentCount": 3,
      "cronbachAlpha": 0.657,
      "averageInterItemCorrelation": 0.43,
      "reliabilityLabel": "Moderate internal consistency",
      "components": [
        {
          "id": "mediaArtsAdoption",
          "label": "Current media arts adoption",
          "coverage": 119,
          "coverageShare": 80.4,
          "mean": 71.6,
          "std": 23.45,
          "itemTotalCorrelation": 0.481
        },
        {
          "id": "standardsFamiliarity",
          "label": "Media arts standards familiarity",
          "coverage": 122,
          "coverageShare": 82.4,
          "mean": 58.6,
          "std": 38.4,
          "itemTotalCorrelation": 0.521
        },
        {
          "id": "mediaArtsBackgroundBinary",
          "label": "Formal media arts background (Yes=100, No=0)",
          "coverage": 147,
          "coverageShare": 99.3,
          "mean": 56.5,
          "std": 49.75,
          "itemTotalCorrelation": 0.522
        }
      ]
    },
    {
      "metricId": "aiConcern",
      "label": "AI concern",
      "kind": "Single normalized item",
      "sampleSize": 139,
      "scoreCoverage": 139,
      "scoreMean": 83.3,
      "scoreStd": 24.59,
      "componentCount": 1,
      "cronbachAlpha": null,
      "averageInterItemCorrelation": null,
      "reliabilityLabel": "Single-item measure",
      "components": [
        {
          "id": "aiConcern",
          "label": "Reported ethical concern about AI",
          "coverage": 139,
          "coverageShare": 93.9,
          "mean": 83.3,
          "std": 24.59,
          "itemTotalCorrelation": null
        }
      ]
    }
  ],
  "analyticModels": [
    {
      "id": "aiReadinessModel",
      "label": "AI readiness associations",
      "description": "Exploratory additive model relating AI readiness to school context, teaching band, experience, media arts background, and AI usage status.",
      "outcomeMetricId": "aiReadiness",
      "formula": "aiReadiness ~ schoolType + teachingBand + experienceBand + mediaArtsBackground + aiUsageStatus + state",
      "sampleSize": 148,
      "rSquared": 0.596,
      "predictorCount": 14,
      "modelType": "stateAwareRidge",
      "ridgeLambda": 2.0,
      "includesStateEffects": true,
      "stateTermCount": 13,
      "omittedLevels": [
        {
          "predictorId": "schoolType",
          "level": "Charter",
          "count": 4,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "schoolType",
          "level": "Other",
          "count": 3,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "mediaArtsBackground",
          "level": "Unspecified",
          "count": 1,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "state",
          "level": "Alabama",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Connecticut",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Delaware",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "New Hampshire",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Oklahoma",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Washington",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Alaska",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Indiana",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Kentucky",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Nebraska",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Oregon",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Virginia",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Wisconsin",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Arizona",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Colorado",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Hawaii",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Kansas",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Minnesota",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "New Jersey",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Nevada",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Vermont",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "West Virginia",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        }
      ],
      "coefficients": [
        {
          "id": "intercept",
          "label": "Intercept",
          "predictorId": "intercept",
          "level": null,
          "baseline": null,
          "beta": 38.91,
          "ciLow": 30.17,
          "ciHigh": 50.71,
          "direction": "positive",
          "termFamily": "predictor"
        },
        {
          "id": "schoolType:Private",
          "label": "School type: Private vs Public",
          "predictorId": "schoolType",
          "level": "Private",
          "baseline": "Public",
          "termFamily": "predictor",
          "beta": 3.28,
          "ciLow": -3.54,
          "ciHigh": 11.67,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Middle",
          "label": "Teaching band: Middle vs Elementary",
          "predictorId": "teachingBand",
          "level": "Middle",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -7.42,
          "ciLow": -16.24,
          "ciHigh": 2.9,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:High School",
          "label": "Teaching band: High School vs Elementary",
          "predictorId": "teachingBand",
          "level": "High School",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -8.95,
          "ciLow": -16.84,
          "ciHigh": -1.41,
          "direction": "negative"
        },
        {
          "id": "teachingBand:Multi-level",
          "label": "Teaching band: Multi-level vs Elementary",
          "predictorId": "teachingBand",
          "level": "Multi-level",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -7.42,
          "ciLow": -17.22,
          "ciHigh": 1.69,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Other",
          "label": "Teaching band: Other vs Elementary",
          "predictorId": "teachingBand",
          "level": "Other",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": 1.16,
          "ciLow": -15.65,
          "ciHigh": 18.1,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:4-6 years",
          "label": "Teaching experience: 4-6 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "4-6 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 8.82,
          "ciLow": -0.91,
          "ciHigh": 18.56,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:7-10 years",
          "label": "Teaching experience: 7-10 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "7-10 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 8.13,
          "ciLow": -0.4,
          "ciHigh": 17.34,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:11-15 years",
          "label": "Teaching experience: 11-15 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "11-15 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 0.78,
          "ciLow": -9.54,
          "ciHigh": 9.31,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:16-20 years",
          "label": "Teaching experience: 16-20 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "16-20 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 4.31,
          "ciLow": -5.85,
          "ciHigh": 14.56,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:20 + years",
          "label": "Teaching experience: 20 + years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "20 + years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 2.71,
          "ciLow": -7.19,
          "ciHigh": 12.13,
          "direction": "crosses_zero"
        },
        {
          "id": "mediaArtsBackground:Yes",
          "label": "Formal media arts background: Yes vs No",
          "predictorId": "mediaArtsBackground",
          "level": "Yes",
          "baseline": "No",
          "termFamily": "predictor",
          "beta": 10.07,
          "ciLow": 2.49,
          "ciHigh": 16.33,
          "direction": "positive"
        },
        {
          "id": "aiUsageStatus:Active classroom AI use",
          "label": "AI usage status: Active classroom AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Active classroom AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 35.38,
          "ciLow": 26.57,
          "ciHigh": 42.74,
          "direction": "positive"
        },
        {
          "id": "aiUsageStatus:Personal AI use",
          "label": "AI usage status: Personal AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Personal AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 28.57,
          "ciLow": 18.44,
          "ciHigh": 36.58,
          "direction": "positive"
        },
        {
          "id": "aiUsageStatus:Other",
          "label": "AI usage status: Other vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Other",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 3.45,
          "ciLow": -12.54,
          "ciHigh": 16.48,
          "direction": "crosses_zero"
        },
        {
          "id": "state:TX",
          "label": "State: Texas vs California",
          "predictorId": "state",
          "level": "TX",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.42,
          "ciLow": -13.63,
          "ciHigh": 8.68,
          "direction": "crosses_zero"
        },
        {
          "id": "state:FL",
          "label": "State: Florida vs California",
          "predictorId": "state",
          "level": "FL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 6.92,
          "ciLow": -1.8,
          "ciHigh": 14.1,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NY",
          "label": "State: New York vs California",
          "predictorId": "state",
          "level": "NY",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.94,
          "ciLow": 0.42,
          "ciHigh": 19.91,
          "direction": "positive"
        },
        {
          "id": "state:GA",
          "label": "State: Georgia vs California",
          "predictorId": "state",
          "level": "GA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 3.27,
          "ciLow": -12.05,
          "ciHigh": 17.26,
          "direction": "crosses_zero"
        },
        {
          "id": "state:OH",
          "label": "State: Ohio vs California",
          "predictorId": "state",
          "level": "OH",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 8.21,
          "ciLow": -0.56,
          "ciHigh": 16.05,
          "direction": "crosses_zero"
        },
        {
          "id": "state:IL",
          "label": "State: Illinois vs California",
          "predictorId": "state",
          "level": "IL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.58,
          "ciLow": -1.77,
          "ciHigh": 19.1,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MD",
          "label": "State: Maryland vs California",
          "predictorId": "state",
          "level": "MD",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 2.25,
          "ciLow": -8.86,
          "ciHigh": 10.93,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NC",
          "label": "State: North Carolina vs California",
          "predictorId": "state",
          "level": "NC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -10.13,
          "ciLow": -20.33,
          "ciHigh": 2.0,
          "direction": "crosses_zero"
        },
        {
          "id": "state:PA",
          "label": "State: Pennsylvania vs California",
          "predictorId": "state",
          "level": "PA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.13,
          "ciLow": -4.51,
          "ciHigh": 21.84,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NM",
          "label": "State: New Mexico vs California",
          "predictorId": "state",
          "level": "NM",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -13.84,
          "ciLow": -24.75,
          "ciHigh": -1.13,
          "direction": "negative"
        },
        {
          "id": "state:SC",
          "label": "State: South Carolina vs California",
          "predictorId": "state",
          "level": "SC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.72,
          "ciLow": -0.85,
          "ciHigh": 19.52,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MA",
          "label": "State: Massachusetts vs California",
          "predictorId": "state",
          "level": "MA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.58,
          "ciLow": 0.45,
          "ciHigh": 16.03,
          "direction": "positive"
        },
        {
          "id": "state:MO",
          "label": "State: Missouri vs California",
          "predictorId": "state",
          "level": "MO",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -0.11,
          "ciLow": -6.55,
          "ciHigh": 6.14,
          "direction": "crosses_zero"
        }
      ],
      "strongestTerms": [
        {
          "id": "aiUsageStatus:Active classroom AI use",
          "label": "AI usage status: Active classroom AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Active classroom AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 35.38,
          "ciLow": 26.57,
          "ciHigh": 42.74,
          "direction": "positive"
        },
        {
          "id": "aiUsageStatus:Personal AI use",
          "label": "AI usage status: Personal AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Personal AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 28.57,
          "ciLow": 18.44,
          "ciHigh": 36.58,
          "direction": "positive"
        },
        {
          "id": "mediaArtsBackground:Yes",
          "label": "Formal media arts background: Yes vs No",
          "predictorId": "mediaArtsBackground",
          "level": "Yes",
          "baseline": "No",
          "termFamily": "predictor",
          "beta": 10.07,
          "ciLow": 2.49,
          "ciHigh": 16.33,
          "direction": "positive"
        },
        {
          "id": "teachingBand:High School",
          "label": "Teaching band: High School vs Elementary",
          "predictorId": "teachingBand",
          "level": "High School",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -8.95,
          "ciLow": -16.84,
          "ciHigh": -1.41,
          "direction": "negative"
        },
        {
          "id": "experienceBand:4-6 years",
          "label": "Teaching experience: 4-6 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "4-6 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 8.82,
          "ciLow": -0.91,
          "ciHigh": 18.56,
          "direction": "crosses_zero"
        }
      ],
      "topStateTerms": [
        {
          "id": "state:NM",
          "label": "State: New Mexico vs California",
          "predictorId": "state",
          "level": "NM",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -13.84,
          "ciLow": -24.75,
          "ciHigh": -1.13,
          "direction": "negative"
        },
        {
          "id": "state:NY",
          "label": "State: New York vs California",
          "predictorId": "state",
          "level": "NY",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.94,
          "ciLow": 0.42,
          "ciHigh": 19.91,
          "direction": "positive"
        },
        {
          "id": "state:SC",
          "label": "State: South Carolina vs California",
          "predictorId": "state",
          "level": "SC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.72,
          "ciLow": -0.85,
          "ciHigh": 19.52,
          "direction": "crosses_zero"
        },
        {
          "id": "state:IL",
          "label": "State: Illinois vs California",
          "predictorId": "state",
          "level": "IL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.58,
          "ciLow": -1.77,
          "ciHigh": 19.1,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MA",
          "label": "State: Massachusetts vs California",
          "predictorId": "state",
          "level": "MA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 10.58,
          "ciLow": 0.45,
          "ciHigh": 16.03,
          "direction": "positive"
        }
      ]
    },
    {
      "id": "aiConcernModel",
      "label": "AI concern associations",
      "description": "Exploratory additive model relating ethical concern about AI to the same contextual predictors.",
      "outcomeMetricId": "aiConcern",
      "formula": "aiConcern ~ schoolType + teachingBand + experienceBand + mediaArtsBackground + aiUsageStatus + state",
      "sampleSize": 139,
      "rSquared": 0.079,
      "predictorCount": 14,
      "modelType": "stateAwareRidge",
      "ridgeLambda": 40.0,
      "includesStateEffects": true,
      "stateTermCount": 12,
      "omittedLevels": [
        {
          "predictorId": "schoolType",
          "level": "Charter",
          "count": 4,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "schoolType",
          "level": "Other",
          "count": 3,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "mediaArtsBackground",
          "level": "Unspecified",
          "count": 1,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "state",
          "level": "Alabama",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Connecticut",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Massachusetts",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "New Hampshire",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Oklahoma",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Washington",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Alaska",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Delaware",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Indiana",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Kentucky",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Nebraska",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Oregon",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Virginia",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Wisconsin",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Arizona",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Colorado",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Hawaii",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Minnesota",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "New Jersey",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Nevada",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Vermont",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "West Virginia",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        }
      ],
      "coefficients": [
        {
          "id": "intercept",
          "label": "Intercept",
          "predictorId": "intercept",
          "level": null,
          "baseline": null,
          "beta": 84.63,
          "ciLow": 80.57,
          "ciHigh": 89.53,
          "direction": "positive",
          "termFamily": "predictor"
        },
        {
          "id": "schoolType:Private",
          "label": "School type: Private vs Public",
          "predictorId": "schoolType",
          "level": "Private",
          "baseline": "Public",
          "termFamily": "predictor",
          "beta": 0.19,
          "ciLow": -3.35,
          "ciHigh": 3.04,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Middle",
          "label": "Teaching band: Middle vs Elementary",
          "predictorId": "teachingBand",
          "level": "Middle",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -1.43,
          "ciLow": -4.3,
          "ciHigh": 1.62,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:High School",
          "label": "Teaching band: High School vs Elementary",
          "predictorId": "teachingBand",
          "level": "High School",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": 1.74,
          "ciLow": -1.33,
          "ciHigh": 4.45,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Multi-level",
          "label": "Teaching band: Multi-level vs Elementary",
          "predictorId": "teachingBand",
          "level": "Multi-level",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -2.5,
          "ciLow": -5.94,
          "ciHigh": 0.62,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Other",
          "label": "Teaching band: Other vs Elementary",
          "predictorId": "teachingBand",
          "level": "Other",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -0.68,
          "ciLow": -3.65,
          "ciHigh": 1.99,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:4-6 years",
          "label": "Teaching experience: 4-6 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "4-6 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 1.99,
          "ciLow": -0.76,
          "ciHigh": 4.63,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:7-10 years",
          "label": "Teaching experience: 7-10 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "7-10 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": -2.24,
          "ciLow": -6.31,
          "ciHigh": 1.08,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:11-15 years",
          "label": "Teaching experience: 11-15 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "11-15 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": -1.64,
          "ciLow": -5.29,
          "ciHigh": 1.5,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:16-20 years",
          "label": "Teaching experience: 16-20 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "16-20 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 0.76,
          "ciLow": -1.65,
          "ciHigh": 3.21,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:20 + years",
          "label": "Teaching experience: 20 + years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "20 + years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": -0.05,
          "ciLow": -3.58,
          "ciHigh": 3.01,
          "direction": "crosses_zero"
        },
        {
          "id": "mediaArtsBackground:Yes",
          "label": "Formal media arts background: Yes vs No",
          "predictorId": "mediaArtsBackground",
          "level": "Yes",
          "baseline": "No",
          "termFamily": "predictor",
          "beta": -0.77,
          "ciLow": -4.21,
          "ciHigh": 2.36,
          "direction": "crosses_zero"
        },
        {
          "id": "aiUsageStatus:Active classroom AI use",
          "label": "AI usage status: Active classroom AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Active classroom AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": -1.05,
          "ciLow": -4.6,
          "ciHigh": 2.2,
          "direction": "crosses_zero"
        },
        {
          "id": "aiUsageStatus:Personal AI use",
          "label": "AI usage status: Personal AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Personal AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": -3.54,
          "ciLow": -6.71,
          "ciHigh": 0.11,
          "direction": "crosses_zero"
        },
        {
          "id": "aiUsageStatus:Other",
          "label": "AI usage status: Other vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Other",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 1.55,
          "ciLow": -0.22,
          "ciHigh": 3.32,
          "direction": "crosses_zero"
        },
        {
          "id": "state:TX",
          "label": "State: Texas vs California",
          "predictorId": "state",
          "level": "TX",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -1.03,
          "ciLow": -4.3,
          "ciHigh": 2.44,
          "direction": "crosses_zero"
        },
        {
          "id": "state:FL",
          "label": "State: Florida vs California",
          "predictorId": "state",
          "level": "FL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.2,
          "ciLow": -0.5,
          "ciHigh": 3.04,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NY",
          "label": "State: New York vs California",
          "predictorId": "state",
          "level": "NY",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 0.71,
          "ciLow": -1.26,
          "ciHigh": 2.29,
          "direction": "crosses_zero"
        },
        {
          "id": "state:GA",
          "label": "State: Georgia vs California",
          "predictorId": "state",
          "level": "GA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.72,
          "ciLow": 0.06,
          "ciHigh": 3.3,
          "direction": "positive"
        },
        {
          "id": "state:MD",
          "label": "State: Maryland vs California",
          "predictorId": "state",
          "level": "MD",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 0.58,
          "ciLow": -1.01,
          "ciHigh": 2.28,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NC",
          "label": "State: North Carolina vs California",
          "predictorId": "state",
          "level": "NC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 0.66,
          "ciLow": -2.1,
          "ciHigh": 2.83,
          "direction": "crosses_zero"
        },
        {
          "id": "state:OH",
          "label": "State: Ohio vs California",
          "predictorId": "state",
          "level": "OH",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -3.27,
          "ciLow": -6.7,
          "ciHigh": -0.02,
          "direction": "negative"
        },
        {
          "id": "state:PA",
          "label": "State: Pennsylvania vs California",
          "predictorId": "state",
          "level": "PA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -0.31,
          "ciLow": -2.97,
          "ciHigh": 2.02,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NM",
          "label": "State: New Mexico vs California",
          "predictorId": "state",
          "level": "NM",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.54,
          "ciLow": -5.74,
          "ciHigh": 1.35,
          "direction": "crosses_zero"
        },
        {
          "id": "state:SC",
          "label": "State: South Carolina vs California",
          "predictorId": "state",
          "level": "SC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 0.22,
          "ciLow": -1.48,
          "ciHigh": 1.81,
          "direction": "crosses_zero"
        },
        {
          "id": "state:IL",
          "label": "State: Illinois vs California",
          "predictorId": "state",
          "level": "IL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -1.88,
          "ciLow": -4.58,
          "ciHigh": 0.21,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MO",
          "label": "State: Missouri vs California",
          "predictorId": "state",
          "level": "MO",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -0.26,
          "ciLow": -2.07,
          "ciHigh": 1.21,
          "direction": "crosses_zero"
        }
      ],
      "strongestTerms": [
        {
          "id": "aiUsageStatus:Personal AI use",
          "label": "AI usage status: Personal AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Personal AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": -3.54,
          "ciLow": -6.71,
          "ciHigh": 0.11,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Multi-level",
          "label": "Teaching band: Multi-level vs Elementary",
          "predictorId": "teachingBand",
          "level": "Multi-level",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -2.5,
          "ciLow": -5.94,
          "ciHigh": 0.62,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:7-10 years",
          "label": "Teaching experience: 7-10 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "7-10 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": -2.24,
          "ciLow": -6.31,
          "ciHigh": 1.08,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:4-6 years",
          "label": "Teaching experience: 4-6 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "4-6 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 1.99,
          "ciLow": -0.76,
          "ciHigh": 4.63,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:High School",
          "label": "Teaching band: High School vs Elementary",
          "predictorId": "teachingBand",
          "level": "High School",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": 1.74,
          "ciLow": -1.33,
          "ciHigh": 4.45,
          "direction": "crosses_zero"
        }
      ],
      "topStateTerms": [
        {
          "id": "state:OH",
          "label": "State: Ohio vs California",
          "predictorId": "state",
          "level": "OH",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -3.27,
          "ciLow": -6.7,
          "ciHigh": -0.02,
          "direction": "negative"
        },
        {
          "id": "state:NM",
          "label": "State: New Mexico vs California",
          "predictorId": "state",
          "level": "NM",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.54,
          "ciLow": -5.74,
          "ciHigh": 1.35,
          "direction": "crosses_zero"
        },
        {
          "id": "state:IL",
          "label": "State: Illinois vs California",
          "predictorId": "state",
          "level": "IL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -1.88,
          "ciLow": -4.58,
          "ciHigh": 0.21,
          "direction": "crosses_zero"
        },
        {
          "id": "state:GA",
          "label": "State: Georgia vs California",
          "predictorId": "state",
          "level": "GA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.72,
          "ciLow": 0.06,
          "ciHigh": 3.3,
          "direction": "positive"
        },
        {
          "id": "state:FL",
          "label": "State: Florida vs California",
          "predictorId": "state",
          "level": "FL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.2,
          "ciLow": -0.5,
          "ciHigh": 3.04,
          "direction": "crosses_zero"
        }
      ]
    },
    {
      "id": "digitalReadinessModel",
      "label": "Digital readiness associations",
      "description": "Exploratory additive model relating digital readiness to respondent context and AI/media-arts positioning.",
      "outcomeMetricId": "digitalReadiness",
      "formula": "digitalReadiness ~ schoolType + teachingBand + experienceBand + mediaArtsBackground + aiUsageStatus + state",
      "sampleSize": 148,
      "rSquared": 0.221,
      "predictorCount": 14,
      "modelType": "stateAwareRidge",
      "ridgeLambda": 20.0,
      "includesStateEffects": true,
      "stateTermCount": 13,
      "omittedLevels": [
        {
          "predictorId": "schoolType",
          "level": "Charter",
          "count": 4,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "schoolType",
          "level": "Other",
          "count": 3,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "mediaArtsBackground",
          "level": "Unspecified",
          "count": 1,
          "reason": "Below model minimum of n=5"
        },
        {
          "predictorId": "state",
          "level": "Alabama",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Connecticut",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Delaware",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "New Hampshire",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Oklahoma",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Washington",
          "count": 3,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Alaska",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Indiana",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Kentucky",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Nebraska",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Oregon",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Virginia",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Wisconsin",
          "count": 2,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Arizona",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Colorado",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Hawaii",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Kansas",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Minnesota",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "New Jersey",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Nevada",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "Vermont",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        },
        {
          "predictorId": "state",
          "level": "West Virginia",
          "count": 1,
          "reason": "Below state-term minimum of n=4"
        }
      ],
      "coefficients": [
        {
          "id": "intercept",
          "label": "Intercept",
          "predictorId": "intercept",
          "level": null,
          "baseline": null,
          "beta": 72.26,
          "ciLow": 68.79,
          "ciHigh": 77.31,
          "direction": "positive",
          "termFamily": "predictor"
        },
        {
          "id": "schoolType:Private",
          "label": "School type: Private vs Public",
          "predictorId": "schoolType",
          "level": "Private",
          "baseline": "Public",
          "termFamily": "predictor",
          "beta": 1.23,
          "ciLow": -2.04,
          "ciHigh": 3.77,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Middle",
          "label": "Teaching band: Middle vs Elementary",
          "predictorId": "teachingBand",
          "level": "Middle",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -3.79,
          "ciLow": -6.58,
          "ciHigh": -0.83,
          "direction": "negative"
        },
        {
          "id": "teachingBand:High School",
          "label": "Teaching band: High School vs Elementary",
          "predictorId": "teachingBand",
          "level": "High School",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": 0.19,
          "ciLow": -2.92,
          "ciHigh": 3.53,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Multi-level",
          "label": "Teaching band: Multi-level vs Elementary",
          "predictorId": "teachingBand",
          "level": "Multi-level",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": 0.46,
          "ciLow": -2.93,
          "ciHigh": 3.78,
          "direction": "crosses_zero"
        },
        {
          "id": "teachingBand:Other",
          "label": "Teaching band: Other vs Elementary",
          "predictorId": "teachingBand",
          "level": "Other",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": 0.61,
          "ciLow": -2.87,
          "ciHigh": 3.56,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:4-6 years",
          "label": "Teaching experience: 4-6 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "4-6 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 1.9,
          "ciLow": -0.42,
          "ciHigh": 4.27,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:7-10 years",
          "label": "Teaching experience: 7-10 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "7-10 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 1.0,
          "ciLow": -2.34,
          "ciHigh": 3.93,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:11-15 years",
          "label": "Teaching experience: 11-15 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "11-15 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 2.77,
          "ciLow": -0.62,
          "ciHigh": 6.03,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:16-20 years",
          "label": "Teaching experience: 16-20 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "16-20 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": -2.56,
          "ciLow": -5.39,
          "ciHigh": 0.81,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:20 + years",
          "label": "Teaching experience: 20 + years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "20 + years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 0.72,
          "ciLow": -2.49,
          "ciHigh": 3.64,
          "direction": "crosses_zero"
        },
        {
          "id": "mediaArtsBackground:Yes",
          "label": "Formal media arts background: Yes vs No",
          "predictorId": "mediaArtsBackground",
          "level": "Yes",
          "baseline": "No",
          "termFamily": "predictor",
          "beta": 5.34,
          "ciLow": 1.72,
          "ciHigh": 8.42,
          "direction": "positive"
        },
        {
          "id": "aiUsageStatus:Active classroom AI use",
          "label": "AI usage status: Active classroom AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Active classroom AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 6.14,
          "ciLow": 2.6,
          "ciHigh": 8.91,
          "direction": "positive"
        },
        {
          "id": "aiUsageStatus:Personal AI use",
          "label": "AI usage status: Personal AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Personal AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 1.93,
          "ciLow": -0.92,
          "ciHigh": 4.91,
          "direction": "crosses_zero"
        },
        {
          "id": "aiUsageStatus:Other",
          "label": "AI usage status: Other vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Other",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": -3.7,
          "ciLow": -7.21,
          "ciHigh": 0.03,
          "direction": "crosses_zero"
        },
        {
          "id": "state:TX",
          "label": "State: Texas vs California",
          "predictorId": "state",
          "level": "TX",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -0.66,
          "ciLow": -4.58,
          "ciHigh": 3.1,
          "direction": "crosses_zero"
        },
        {
          "id": "state:FL",
          "label": "State: Florida vs California",
          "predictorId": "state",
          "level": "FL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.41,
          "ciLow": -0.73,
          "ciHigh": 3.49,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NY",
          "label": "State: New York vs California",
          "predictorId": "state",
          "level": "NY",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.42,
          "ciLow": -0.66,
          "ciHigh": 3.44,
          "direction": "crosses_zero"
        },
        {
          "id": "state:GA",
          "label": "State: Georgia vs California",
          "predictorId": "state",
          "level": "GA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -0.22,
          "ciLow": -3.04,
          "ciHigh": 1.93,
          "direction": "crosses_zero"
        },
        {
          "id": "state:OH",
          "label": "State: Ohio vs California",
          "predictorId": "state",
          "level": "OH",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 2.37,
          "ciLow": 0.49,
          "ciHigh": 4.17,
          "direction": "positive"
        },
        {
          "id": "state:IL",
          "label": "State: Illinois vs California",
          "predictorId": "state",
          "level": "IL",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -0.09,
          "ciLow": -2.59,
          "ciHigh": 2.28,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MD",
          "label": "State: Maryland vs California",
          "predictorId": "state",
          "level": "MD",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 0.06,
          "ciLow": -3.0,
          "ciHigh": 2.57,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NC",
          "label": "State: North Carolina vs California",
          "predictorId": "state",
          "level": "NC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.84,
          "ciLow": -5.48,
          "ciHigh": 0.52,
          "direction": "crosses_zero"
        },
        {
          "id": "state:PA",
          "label": "State: Pennsylvania vs California",
          "predictorId": "state",
          "level": "PA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -1.19,
          "ciLow": -4.78,
          "ciHigh": 2.05,
          "direction": "crosses_zero"
        },
        {
          "id": "state:NM",
          "label": "State: New Mexico vs California",
          "predictorId": "state",
          "level": "NM",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -1.45,
          "ciLow": -4.34,
          "ciHigh": 1.67,
          "direction": "crosses_zero"
        },
        {
          "id": "state:SC",
          "label": "State: South Carolina vs California",
          "predictorId": "state",
          "level": "SC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.12,
          "ciLow": -5.64,
          "ciHigh": 0.82,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MA",
          "label": "State: Massachusetts vs California",
          "predictorId": "state",
          "level": "MA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.87,
          "ciLow": -0.11,
          "ciHigh": 3.9,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MO",
          "label": "State: Missouri vs California",
          "predictorId": "state",
          "level": "MO",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.68,
          "ciLow": -0.19,
          "ciHigh": 3.37,
          "direction": "crosses_zero"
        }
      ],
      "strongestTerms": [
        {
          "id": "aiUsageStatus:Active classroom AI use",
          "label": "AI usage status: Active classroom AI use vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Active classroom AI use",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": 6.14,
          "ciLow": 2.6,
          "ciHigh": 8.91,
          "direction": "positive"
        },
        {
          "id": "mediaArtsBackground:Yes",
          "label": "Formal media arts background: Yes vs No",
          "predictorId": "mediaArtsBackground",
          "level": "Yes",
          "baseline": "No",
          "termFamily": "predictor",
          "beta": 5.34,
          "ciLow": 1.72,
          "ciHigh": 8.42,
          "direction": "positive"
        },
        {
          "id": "teachingBand:Middle",
          "label": "Teaching band: Middle vs Elementary",
          "predictorId": "teachingBand",
          "level": "Middle",
          "baseline": "Elementary",
          "termFamily": "predictor",
          "beta": -3.79,
          "ciLow": -6.58,
          "ciHigh": -0.83,
          "direction": "negative"
        },
        {
          "id": "aiUsageStatus:Other",
          "label": "AI usage status: Other vs Interested, not yet using",
          "predictorId": "aiUsageStatus",
          "level": "Other",
          "baseline": "Interested, not yet using",
          "termFamily": "predictor",
          "beta": -3.7,
          "ciLow": -7.21,
          "ciHigh": 0.03,
          "direction": "crosses_zero"
        },
        {
          "id": "experienceBand:11-15 years",
          "label": "Teaching experience: 11-15 years vs 0-3 years",
          "predictorId": "experienceBand",
          "level": "11-15 years",
          "baseline": "0-3 years",
          "termFamily": "predictor",
          "beta": 2.77,
          "ciLow": -0.62,
          "ciHigh": 6.03,
          "direction": "crosses_zero"
        }
      ],
      "topStateTerms": [
        {
          "id": "state:NC",
          "label": "State: North Carolina vs California",
          "predictorId": "state",
          "level": "NC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.84,
          "ciLow": -5.48,
          "ciHigh": 0.52,
          "direction": "crosses_zero"
        },
        {
          "id": "state:OH",
          "label": "State: Ohio vs California",
          "predictorId": "state",
          "level": "OH",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 2.37,
          "ciLow": 0.49,
          "ciHigh": 4.17,
          "direction": "positive"
        },
        {
          "id": "state:SC",
          "label": "State: South Carolina vs California",
          "predictorId": "state",
          "level": "SC",
          "baseline": "CA",
          "termFamily": "state",
          "beta": -2.12,
          "ciLow": -5.64,
          "ciHigh": 0.82,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MA",
          "label": "State: Massachusetts vs California",
          "predictorId": "state",
          "level": "MA",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.87,
          "ciLow": -0.11,
          "ciHigh": 3.9,
          "direction": "crosses_zero"
        },
        {
          "id": "state:MO",
          "label": "State: Missouri vs California",
          "predictorId": "state",
          "level": "MO",
          "baseline": "CA",
          "termFamily": "state",
          "beta": 1.68,
          "ciLow": -0.19,
          "ciHigh": 3.37,
          "direction": "crosses_zero"
        }
      ]
    }
  ],
  "statePooledEstimates": [
    {
      "metricId": "aiReadiness",
      "label": "AI readiness",
      "overallMean": 62.67,
      "withinVariance": 669.035,
      "betweenVariance": 218.825,
      "states": [
        {
          "state": "FL",
          "stateName": "Florida",
          "sampleSize": 9,
          "rawMean": 86.11,
          "pooledMean": 80.17,
          "shrinkage": 0.746,
          "ciLow": 65.57,
          "ciHigh": 94.77
        },
        {
          "state": "CA",
          "stateName": "California",
          "sampleSize": 18,
          "rawMean": 81.48,
          "pooledMean": 78.75,
          "shrinkage": 0.855,
          "ciLow": 67.7,
          "ciHigh": 89.8
        },
        {
          "state": "IL",
          "stateName": "Illinois",
          "sampleSize": 6,
          "rawMean": 77.77,
          "pooledMean": 72.67,
          "shrinkage": 0.662,
          "ciLow": 55.83,
          "ciHigh": 89.52
        },
        {
          "state": "NY",
          "stateName": "New York",
          "sampleSize": 9,
          "rawMean": 75.01,
          "pooledMean": 71.88,
          "shrinkage": 0.746,
          "ciLow": 57.28,
          "ciHigh": 86.48
        },
        {
          "state": "HI",
          "stateName": "Hawaii",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 71.87,
          "shrinkage": 0.246,
          "ciLow": 46.7,
          "ciHigh": 97.04
        },
        {
          "state": "NV",
          "stateName": "Nevada",
          "sampleSize": 1,
          "rawMean": 91.7,
          "pooledMean": 69.82,
          "shrinkage": 0.246,
          "ciLow": 44.66,
          "ciHigh": 94.99
        },
        {
          "state": "AK",
          "stateName": "Alaska",
          "sampleSize": 2,
          "rawMean": 79.15,
          "pooledMean": 69.19,
          "shrinkage": 0.395,
          "ciLow": 46.64,
          "ciHigh": 91.73
        },
        {
          "state": "PA",
          "stateName": "Pennsylvania",
          "sampleSize": 6,
          "rawMean": 72.22,
          "pooledMean": 69.0,
          "shrinkage": 0.662,
          "ciLow": 52.15,
          "ciHigh": 85.84
        },
        {
          "state": "OK",
          "stateName": "Oklahoma",
          "sampleSize": 3,
          "rawMean": 75.0,
          "pooledMean": 68.78,
          "shrinkage": 0.495,
          "ciLow": 48.18,
          "ciHigh": 89.37
        },
        {
          "state": "DE",
          "stateName": "Delaware",
          "sampleSize": 3,
          "rawMean": 75.0,
          "pooledMean": 68.78,
          "shrinkage": 0.495,
          "ciLow": 48.18,
          "ciHigh": 89.37
        },
        {
          "state": "OH",
          "stateName": "Ohio",
          "sampleSize": 7,
          "rawMean": 70.21,
          "pooledMean": 67.92,
          "shrinkage": 0.696,
          "ciLow": 51.93,
          "ciHigh": 83.9
        },
        {
          "state": "VA",
          "stateName": "Virginia",
          "sampleSize": 2,
          "rawMean": 70.85,
          "pooledMean": 65.9,
          "shrinkage": 0.395,
          "ciLow": 43.36,
          "ciHigh": 88.45
        },
        {
          "state": "AZ",
          "stateName": "Arizona",
          "sampleSize": 1,
          "rawMean": 75.0,
          "pooledMean": 65.71,
          "shrinkage": 0.246,
          "ciLow": 40.54,
          "ciHigh": 90.88
        },
        {
          "state": "MA",
          "stateName": "Massachusetts",
          "sampleSize": 4,
          "rawMean": 66.65,
          "pooledMean": 64.93,
          "shrinkage": 0.567,
          "ciLow": 45.84,
          "ciHigh": 84.01
        },
        {
          "state": "WI",
          "stateName": "Wisconsin",
          "sampleSize": 2,
          "rawMean": 66.7,
          "pooledMean": 64.26,
          "shrinkage": 0.395,
          "ciLow": 41.72,
          "ciHigh": 86.81
        },
        {
          "state": "NE",
          "stateName": "Nebraska",
          "sampleSize": 2,
          "rawMean": 66.7,
          "pooledMean": 64.26,
          "shrinkage": 0.395,
          "ciLow": 41.72,
          "ciHigh": 86.81
        },
        {
          "state": "MO",
          "stateName": "Missouri",
          "sampleSize": 4,
          "rawMean": 64.6,
          "pooledMean": 63.76,
          "shrinkage": 0.567,
          "ciLow": 44.68,
          "ciHigh": 82.85
        },
        {
          "state": "WV",
          "stateName": "West Virginia",
          "sampleSize": 1,
          "rawMean": 66.7,
          "pooledMean": 63.66,
          "shrinkage": 0.246,
          "ciLow": 38.49,
          "ciHigh": 88.83
        },
        {
          "state": "CT",
          "stateName": "Connecticut",
          "sampleSize": 3,
          "rawMean": 61.1,
          "pooledMean": 61.89,
          "shrinkage": 0.495,
          "ciLow": 41.29,
          "ciHigh": 82.49
        },
        {
          "state": "CO",
          "stateName": "Colorado",
          "sampleSize": 1,
          "rawMean": 58.3,
          "pooledMean": 61.59,
          "shrinkage": 0.246,
          "ciLow": 36.42,
          "ciHigh": 86.76
        },
        {
          "state": "KY",
          "stateName": "Kentucky",
          "sampleSize": 2,
          "rawMean": 58.35,
          "pooledMean": 60.96,
          "shrinkage": 0.395,
          "ciLow": 38.42,
          "ciHigh": 83.5
        },
        {
          "state": "MD",
          "stateName": "Maryland",
          "sampleSize": 6,
          "rawMean": 59.72,
          "pooledMean": 60.72,
          "shrinkage": 0.662,
          "ciLow": 43.87,
          "ciHigh": 77.56
        },
        {
          "state": "SC",
          "stateName": "South Carolina",
          "sampleSize": 5,
          "rawMean": 58.34,
          "pooledMean": 59.98,
          "shrinkage": 0.621,
          "ciLow": 42.12,
          "ciHigh": 77.84
        },
        {
          "state": "MN",
          "stateName": "Minnesota",
          "sampleSize": 1,
          "rawMean": 50.0,
          "pooledMean": 59.55,
          "shrinkage": 0.246,
          "ciLow": 34.38,
          "ciHigh": 84.71
        },
        {
          "state": "GA",
          "stateName": "Georgia",
          "sampleSize": 8,
          "rawMean": 57.29,
          "pooledMean": 58.78,
          "shrinkage": 0.723,
          "ciLow": 43.53,
          "ciHigh": 74.02
        },
        {
          "state": "AL",
          "stateName": "Alabama",
          "sampleSize": 3,
          "rawMean": 52.77,
          "pooledMean": 57.77,
          "shrinkage": 0.495,
          "ciLow": 37.17,
          "ciHigh": 78.36
        },
        {
          "state": "NJ",
          "stateName": "New Jersey",
          "sampleSize": 1,
          "rawMean": 41.7,
          "pooledMean": 57.5,
          "shrinkage": 0.246,
          "ciLow": 32.33,
          "ciHigh": 82.67
        },
        {
          "state": "TX",
          "stateName": "Texas",
          "sampleSize": 14,
          "rawMean": 51.79,
          "pooledMean": 53.74,
          "shrinkage": 0.821,
          "ciLow": 41.46,
          "ciHigh": 66.01
        },
        {
          "state": "NH",
          "stateName": "New Hampshire",
          "sampleSize": 3,
          "rawMean": 44.43,
          "pooledMean": 53.64,
          "shrinkage": 0.495,
          "ciLow": 33.04,
          "ciHigh": 74.23
        },
        {
          "state": "VT",
          "stateName": "Vermont",
          "sampleSize": 1,
          "rawMean": 16.7,
          "pooledMean": 51.34,
          "shrinkage": 0.246,
          "ciLow": 26.17,
          "ciHigh": 76.51
        },
        {
          "state": "NM",
          "stateName": "New Mexico",
          "sampleSize": 5,
          "rawMean": 38.34,
          "pooledMean": 47.57,
          "shrinkage": 0.621,
          "ciLow": 29.71,
          "ciHigh": 65.43
        },
        {
          "state": "KS",
          "stateName": "Kansas",
          "sampleSize": 1,
          "rawMean": 0.0,
          "pooledMean": 47.22,
          "shrinkage": 0.246,
          "ciLow": 22.05,
          "ciHigh": 72.39
        },
        {
          "state": "NC",
          "stateName": "North Carolina",
          "sampleSize": 6,
          "rawMean": 37.5,
          "pooledMean": 46.0,
          "shrinkage": 0.662,
          "ciLow": 29.15,
          "ciHigh": 62.84
        },
        {
          "state": "OR",
          "stateName": "Oregon",
          "sampleSize": 2,
          "rawMean": 12.5,
          "pooledMean": 42.83,
          "shrinkage": 0.395,
          "ciLow": 20.29,
          "ciHigh": 65.37
        },
        {
          "state": "WA",
          "stateName": "Washington",
          "sampleSize": 3,
          "rawMean": 16.67,
          "pooledMean": 39.89,
          "shrinkage": 0.495,
          "ciLow": 19.29,
          "ciHigh": 60.49
        },
        {
          "state": "IN",
          "stateName": "Indiana",
          "sampleSize": 2,
          "rawMean": 4.15,
          "pooledMean": 39.53,
          "shrinkage": 0.395,
          "ciLow": 16.98,
          "ciHigh": 62.07
        }
      ]
    },
    {
      "metricId": "digitalReadiness",
      "label": "Digital readiness",
      "overallMean": 78.1,
      "withinVariance": 349.064,
      "betweenVariance": 0.0,
      "states": [
        {
          "state": "FL",
          "stateName": "Florida",
          "sampleSize": 9,
          "rawMean": 85.84,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 65.9,
          "ciHigh": 90.31
        },
        {
          "state": "MD",
          "stateName": "Maryland",
          "sampleSize": 6,
          "rawMean": 76.83,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 63.15,
          "ciHigh": 93.05
        },
        {
          "state": "MO",
          "stateName": "Missouri",
          "sampleSize": 4,
          "rawMean": 87.5,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 59.79,
          "ciHigh": 96.41
        },
        {
          "state": "CA",
          "stateName": "California",
          "sampleSize": 18,
          "rawMean": 80.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 69.47,
          "ciHigh": 86.73
        },
        {
          "state": "CO",
          "stateName": "Colorado",
          "sampleSize": 1,
          "rawMean": 72.3,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "NY",
          "stateName": "New York",
          "sampleSize": 9,
          "rawMean": 81.84,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 65.9,
          "ciHigh": 90.31
        },
        {
          "state": "OK",
          "stateName": "Oklahoma",
          "sampleSize": 3,
          "rawMean": 70.43,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 56.96,
          "ciHigh": 99.24
        },
        {
          "state": "OH",
          "stateName": "Ohio",
          "sampleSize": 7,
          "rawMean": 89.34,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 64.26,
          "ciHigh": 91.94
        },
        {
          "state": "TX",
          "stateName": "Texas",
          "sampleSize": 14,
          "rawMean": 75.54,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 68.32,
          "ciHigh": 87.89
        },
        {
          "state": "NV",
          "stateName": "Nevada",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "PA",
          "stateName": "Pennsylvania",
          "sampleSize": 6,
          "rawMean": 73.15,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 63.15,
          "ciHigh": 93.05
        },
        {
          "state": "NH",
          "stateName": "New Hampshire",
          "sampleSize": 3,
          "rawMean": 74.5,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 56.96,
          "ciHigh": 99.24
        },
        {
          "state": "KY",
          "stateName": "Kentucky",
          "sampleSize": 2,
          "rawMean": 77.8,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "NM",
          "stateName": "New Mexico",
          "sampleSize": 5,
          "rawMean": 68.32,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 61.73,
          "ciHigh": 94.48
        },
        {
          "state": "SC",
          "stateName": "South Carolina",
          "sampleSize": 5,
          "rawMean": 64.48,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 61.73,
          "ciHigh": 94.48
        },
        {
          "state": "GA",
          "stateName": "Georgia",
          "sampleSize": 8,
          "rawMean": 77.12,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 65.16,
          "ciHigh": 91.05
        },
        {
          "state": "WI",
          "stateName": "Wisconsin",
          "sampleSize": 2,
          "rawMean": 72.2,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "NC",
          "stateName": "North Carolina",
          "sampleSize": 6,
          "rawMean": 64.35,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 63.15,
          "ciHigh": 93.05
        },
        {
          "state": "AL",
          "stateName": "Alabama",
          "sampleSize": 3,
          "rawMean": 77.9,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 56.96,
          "ciHigh": 99.24
        },
        {
          "state": "CT",
          "stateName": "Connecticut",
          "sampleSize": 3,
          "rawMean": 74.1,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 56.96,
          "ciHigh": 99.24
        },
        {
          "state": "IL",
          "stateName": "Illinois",
          "sampleSize": 6,
          "rawMean": 77.83,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 63.15,
          "ciHigh": 93.05
        },
        {
          "state": "VA",
          "stateName": "Virginia",
          "sampleSize": 2,
          "rawMean": 82.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "NE",
          "stateName": "Nebraska",
          "sampleSize": 2,
          "rawMean": 79.15,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "WV",
          "stateName": "West Virginia",
          "sampleSize": 1,
          "rawMean": 77.7,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "MA",
          "stateName": "Massachusetts",
          "sampleSize": 4,
          "rawMean": 86.17,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 59.79,
          "ciHigh": 96.41
        },
        {
          "state": "MN",
          "stateName": "Minnesota",
          "sampleSize": 1,
          "rawMean": 91.7,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "KS",
          "stateName": "Kansas",
          "sampleSize": 1,
          "rawMean": 77.7,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "IN",
          "stateName": "Indiana",
          "sampleSize": 2,
          "rawMean": 94.5,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "WA",
          "stateName": "Washington",
          "sampleSize": 3,
          "rawMean": 75.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 56.96,
          "ciHigh": 99.24
        },
        {
          "state": "OR",
          "stateName": "Oregon",
          "sampleSize": 2,
          "rawMean": 55.65,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "NJ",
          "stateName": "New Jersey",
          "sampleSize": 1,
          "rawMean": 75.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "AK",
          "stateName": "Alaska",
          "sampleSize": 2,
          "rawMean": 82.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 52.21,
          "ciHigh": 104.0
        },
        {
          "state": "AZ",
          "stateName": "Arizona",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "DE",
          "stateName": "Delaware",
          "sampleSize": 3,
          "rawMean": 90.27,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 56.96,
          "ciHigh": 99.24
        },
        {
          "state": "VT",
          "stateName": "Vermont",
          "sampleSize": 1,
          "rawMean": 89.0,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        },
        {
          "state": "HI",
          "stateName": "Hawaii",
          "sampleSize": 1,
          "rawMean": 41.7,
          "pooledMean": 78.1,
          "shrinkage": 0.0,
          "ciLow": 41.48,
          "ciHigh": 114.72
        }
      ]
    },
    {
      "metricId": "mediaArtsReadiness",
      "label": "Media arts readiness",
      "overallMean": 59.01,
      "withinVariance": 1119.741,
      "betweenVariance": 111.221,
      "states": [
        {
          "state": "FL",
          "stateName": "Florida",
          "sampleSize": 9,
          "rawMean": 84.26,
          "pooledMean": 70.93,
          "shrinkage": 0.472,
          "ciLow": 55.91,
          "ciHigh": 85.95
        },
        {
          "state": "CA",
          "stateName": "California",
          "sampleSize": 18,
          "rawMean": 70.84,
          "pooledMean": 66.6,
          "shrinkage": 0.641,
          "ciLow": 54.22,
          "ciHigh": 78.98
        },
        {
          "state": "IN",
          "stateName": "Indiana",
          "sampleSize": 2,
          "rawMean": 100.0,
          "pooledMean": 65.8,
          "shrinkage": 0.166,
          "ciLow": 46.92,
          "ciHigh": 84.68
        },
        {
          "state": "AK",
          "stateName": "Alaska",
          "sampleSize": 2,
          "rawMean": 95.85,
          "pooledMean": 65.12,
          "shrinkage": 0.166,
          "ciLow": 46.24,
          "ciHigh": 84.0
        },
        {
          "state": "NY",
          "stateName": "New York",
          "sampleSize": 9,
          "rawMean": 69.46,
          "pooledMean": 63.94,
          "shrinkage": 0.472,
          "ciLow": 48.92,
          "ciHigh": 78.96
        },
        {
          "state": "OH",
          "stateName": "Ohio",
          "sampleSize": 7,
          "rawMean": 69.04,
          "pooledMean": 63.12,
          "shrinkage": 0.41,
          "ciLow": 47.25,
          "ciHigh": 79.0
        },
        {
          "state": "NV",
          "stateName": "Nevada",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 62.71,
          "shrinkage": 0.09,
          "ciLow": 43.0,
          "ciHigh": 82.43
        },
        {
          "state": "NJ",
          "stateName": "New Jersey",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 62.71,
          "shrinkage": 0.09,
          "ciLow": 43.0,
          "ciHigh": 82.43
        },
        {
          "state": "VT",
          "stateName": "Vermont",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 62.71,
          "shrinkage": 0.09,
          "ciLow": 43.0,
          "ciHigh": 82.43
        },
        {
          "state": "HI",
          "stateName": "Hawaii",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 62.71,
          "shrinkage": 0.09,
          "ciLow": 43.0,
          "ciHigh": 82.43
        },
        {
          "state": "IL",
          "stateName": "Illinois",
          "sampleSize": 6,
          "rawMean": 68.05,
          "pooledMean": 62.39,
          "shrinkage": 0.373,
          "ciLow": 46.02,
          "ciHigh": 78.75
        },
        {
          "state": "WV",
          "stateName": "West Virginia",
          "sampleSize": 1,
          "rawMean": 91.7,
          "pooledMean": 61.96,
          "shrinkage": 0.09,
          "ciLow": 42.25,
          "ciHigh": 81.68
        },
        {
          "state": "MA",
          "stateName": "Massachusetts",
          "sampleSize": 4,
          "rawMean": 66.67,
          "pooledMean": 61.19,
          "shrinkage": 0.284,
          "ciLow": 43.7,
          "ciHigh": 78.68
        },
        {
          "state": "CT",
          "stateName": "Connecticut",
          "sampleSize": 3,
          "rawMean": 66.7,
          "pooledMean": 60.78,
          "shrinkage": 0.23,
          "ciLow": 42.63,
          "ciHigh": 78.92
        },
        {
          "state": "OK",
          "stateName": "Oklahoma",
          "sampleSize": 3,
          "rawMean": 66.67,
          "pooledMean": 60.77,
          "shrinkage": 0.23,
          "ciLow": 42.63,
          "ciHigh": 78.91
        },
        {
          "state": "AZ",
          "stateName": "Arizona",
          "sampleSize": 1,
          "rawMean": 75.0,
          "pooledMean": 60.46,
          "shrinkage": 0.09,
          "ciLow": 40.74,
          "ciHigh": 80.17
        },
        {
          "state": "TX",
          "stateName": "Texas",
          "sampleSize": 14,
          "rawMean": 59.53,
          "pooledMean": 59.31,
          "shrinkage": 0.582,
          "ciLow": 45.94,
          "ciHigh": 72.68
        },
        {
          "state": "MD",
          "stateName": "Maryland",
          "sampleSize": 6,
          "rawMean": 59.72,
          "pooledMean": 59.28,
          "shrinkage": 0.373,
          "ciLow": 42.91,
          "ciHigh": 75.64
        },
        {
          "state": "AL",
          "stateName": "Alabama",
          "sampleSize": 3,
          "rawMean": 58.33,
          "pooledMean": 58.85,
          "shrinkage": 0.23,
          "ciLow": 40.71,
          "ciHigh": 77.0
        },
        {
          "state": "NM",
          "stateName": "New Mexico",
          "sampleSize": 5,
          "rawMean": 55.0,
          "pooledMean": 57.68,
          "shrinkage": 0.332,
          "ciLow": 40.78,
          "ciHigh": 74.58
        },
        {
          "state": "DE",
          "stateName": "Delaware",
          "sampleSize": 3,
          "rawMean": 52.77,
          "pooledMean": 57.58,
          "shrinkage": 0.23,
          "ciLow": 39.43,
          "ciHigh": 75.72
        },
        {
          "state": "NE",
          "stateName": "Nebraska",
          "sampleSize": 2,
          "rawMean": 50.0,
          "pooledMean": 57.52,
          "shrinkage": 0.166,
          "ciLow": 38.64,
          "ciHigh": 76.4
        },
        {
          "state": "MN",
          "stateName": "Minnesota",
          "sampleSize": 1,
          "rawMean": 41.7,
          "pooledMean": 57.45,
          "shrinkage": 0.09,
          "ciLow": 37.73,
          "ciHigh": 77.16
        },
        {
          "state": "KS",
          "stateName": "Kansas",
          "sampleSize": 1,
          "rawMean": 33.3,
          "pooledMean": 56.69,
          "shrinkage": 0.09,
          "ciLow": 36.97,
          "ciHigh": 76.4
        },
        {
          "state": "VA",
          "stateName": "Virginia",
          "sampleSize": 2,
          "rawMean": 41.7,
          "pooledMean": 56.14,
          "shrinkage": 0.166,
          "ciLow": 37.26,
          "ciHigh": 75.02
        },
        {
          "state": "WA",
          "stateName": "Washington",
          "sampleSize": 3,
          "rawMean": 41.67,
          "pooledMean": 55.03,
          "shrinkage": 0.23,
          "ciLow": 36.89,
          "ciHigh": 73.17
        },
        {
          "state": "KY",
          "stateName": "Kentucky",
          "sampleSize": 2,
          "rawMean": 33.3,
          "pooledMean": 54.75,
          "shrinkage": 0.166,
          "ciLow": 35.87,
          "ciHigh": 73.63
        },
        {
          "state": "MO",
          "stateName": "Missouri",
          "sampleSize": 4,
          "rawMean": 43.75,
          "pooledMean": 54.67,
          "shrinkage": 0.284,
          "ciLow": 37.19,
          "ciHigh": 72.16
        },
        {
          "state": "NC",
          "stateName": "North Carolina",
          "sampleSize": 6,
          "rawMean": 47.23,
          "pooledMean": 54.61,
          "shrinkage": 0.373,
          "ciLow": 38.25,
          "ciHigh": 70.97
        },
        {
          "state": "CO",
          "stateName": "Colorado",
          "sampleSize": 1,
          "rawMean": 8.3,
          "pooledMean": 54.43,
          "shrinkage": 0.09,
          "ciLow": 34.71,
          "ciHigh": 74.14
        },
        {
          "state": "NH",
          "stateName": "New Hampshire",
          "sampleSize": 3,
          "rawMean": 36.1,
          "pooledMean": 53.75,
          "shrinkage": 0.23,
          "ciLow": 35.61,
          "ciHigh": 71.89
        },
        {
          "state": "GA",
          "stateName": "Georgia",
          "sampleSize": 8,
          "rawMean": 41.67,
          "pooledMean": 51.33,
          "shrinkage": 0.443,
          "ciLow": 35.9,
          "ciHigh": 66.76
        },
        {
          "state": "OR",
          "stateName": "Oregon",
          "sampleSize": 2,
          "rawMean": 12.5,
          "pooledMean": 51.3,
          "shrinkage": 0.166,
          "ciLow": 32.42,
          "ciHigh": 70.18
        },
        {
          "state": "SC",
          "stateName": "South Carolina",
          "sampleSize": 5,
          "rawMean": 34.98,
          "pooledMean": 51.04,
          "shrinkage": 0.332,
          "ciLow": 34.14,
          "ciHigh": 67.93
        },
        {
          "state": "WI",
          "stateName": "Wisconsin",
          "sampleSize": 2,
          "rawMean": 8.35,
          "pooledMean": 50.61,
          "shrinkage": 0.166,
          "ciLow": 31.73,
          "ciHigh": 69.49
        },
        {
          "state": "PA",
          "stateName": "Pennsylvania",
          "sampleSize": 6,
          "rawMean": 30.55,
          "pooledMean": 48.38,
          "shrinkage": 0.373,
          "ciLow": 32.02,
          "ciHigh": 64.75
        }
      ]
    },
    {
      "metricId": "aiConcern",
      "label": "AI concern",
      "overallMean": 83.35,
      "withinVariance": 545.882,
      "betweenVariance": 61.627,
      "states": [
        {
          "state": "CA",
          "stateName": "California",
          "sampleSize": 16,
          "rawMean": 93.44,
          "pooledMean": 89.84,
          "shrinkage": 0.644,
          "ciLow": 80.66,
          "ciHigh": 99.03
        },
        {
          "state": "GA",
          "stateName": "Georgia",
          "sampleSize": 8,
          "rawMean": 95.62,
          "pooledMean": 89.17,
          "shrinkage": 0.475,
          "ciLow": 78.02,
          "ciHigh": 100.32
        },
        {
          "state": "OK",
          "stateName": "Oklahoma",
          "sampleSize": 3,
          "rawMean": 100.0,
          "pooledMean": 87.56,
          "shrinkage": 0.253,
          "ciLow": 74.26,
          "ciHigh": 100.86
        },
        {
          "state": "IN",
          "stateName": "Indiana",
          "sampleSize": 2,
          "rawMean": 100.0,
          "pooledMean": 86.41,
          "shrinkage": 0.184,
          "ciLow": 72.52,
          "ciHigh": 100.31
        },
        {
          "state": "OR",
          "stateName": "Oregon",
          "sampleSize": 2,
          "rawMean": 100.0,
          "pooledMean": 86.41,
          "shrinkage": 0.184,
          "ciLow": 72.52,
          "ciHigh": 100.31
        },
        {
          "state": "DE",
          "stateName": "Delaware",
          "sampleSize": 2,
          "rawMean": 100.0,
          "pooledMean": 86.41,
          "shrinkage": 0.184,
          "ciLow": 72.52,
          "ciHigh": 100.31
        },
        {
          "state": "FL",
          "stateName": "Florida",
          "sampleSize": 9,
          "rawMean": 88.33,
          "pooledMean": 85.86,
          "shrinkage": 0.504,
          "ciLow": 75.02,
          "ciHigh": 96.69
        },
        {
          "state": "NY",
          "stateName": "New York",
          "sampleSize": 9,
          "rawMean": 88.33,
          "pooledMean": 85.86,
          "shrinkage": 0.504,
          "ciLow": 75.02,
          "ciHigh": 96.69
        },
        {
          "state": "MD",
          "stateName": "Maryland",
          "sampleSize": 6,
          "rawMean": 88.33,
          "pooledMean": 85.36,
          "shrinkage": 0.404,
          "ciLow": 73.48,
          "ciHigh": 97.24
        },
        {
          "state": "CO",
          "stateName": "Colorado",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 85.03,
          "shrinkage": 0.101,
          "ciLow": 70.45,
          "ciHigh": 99.62
        },
        {
          "state": "WV",
          "stateName": "West Virginia",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 85.03,
          "shrinkage": 0.101,
          "ciLow": 70.45,
          "ciHigh": 99.62
        },
        {
          "state": "MN",
          "stateName": "Minnesota",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 85.03,
          "shrinkage": 0.101,
          "ciLow": 70.45,
          "ciHigh": 99.62
        },
        {
          "state": "NJ",
          "stateName": "New Jersey",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 85.03,
          "shrinkage": 0.101,
          "ciLow": 70.45,
          "ciHigh": 99.62
        },
        {
          "state": "AZ",
          "stateName": "Arizona",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 85.03,
          "shrinkage": 0.101,
          "ciLow": 70.45,
          "ciHigh": 99.62
        },
        {
          "state": "VT",
          "stateName": "Vermont",
          "sampleSize": 1,
          "rawMean": 100.0,
          "pooledMean": 85.03,
          "shrinkage": 0.101,
          "ciLow": 70.45,
          "ciHigh": 99.62
        },
        {
          "state": "NC",
          "stateName": "North Carolina",
          "sampleSize": 6,
          "rawMean": 87.5,
          "pooledMean": 85.02,
          "shrinkage": 0.404,
          "ciLow": 73.14,
          "ciHigh": 96.9
        },
        {
          "state": "CT",
          "stateName": "Connecticut",
          "sampleSize": 3,
          "rawMean": 88.33,
          "pooledMean": 84.61,
          "shrinkage": 0.253,
          "ciLow": 71.31,
          "ciHigh": 97.9
        },
        {
          "state": "MA",
          "stateName": "Massachusetts",
          "sampleSize": 3,
          "rawMean": 88.33,
          "pooledMean": 84.61,
          "shrinkage": 0.253,
          "ciLow": 71.31,
          "ciHigh": 97.9
        },
        {
          "state": "WA",
          "stateName": "Washington",
          "sampleSize": 3,
          "rawMean": 88.33,
          "pooledMean": 84.61,
          "shrinkage": 0.253,
          "ciLow": 71.31,
          "ciHigh": 97.9
        },
        {
          "state": "SC",
          "stateName": "South Carolina",
          "sampleSize": 5,
          "rawMean": 86.0,
          "pooledMean": 84.3,
          "shrinkage": 0.361,
          "ciLow": 72.0,
          "ciHigh": 96.6
        },
        {
          "state": "KY",
          "stateName": "Kentucky",
          "sampleSize": 2,
          "rawMean": 82.5,
          "pooledMean": 83.19,
          "shrinkage": 0.184,
          "ciLow": 69.29,
          "ciHigh": 97.09
        },
        {
          "state": "MO",
          "stateName": "Missouri",
          "sampleSize": 4,
          "rawMean": 82.5,
          "pooledMean": 83.08,
          "shrinkage": 0.311,
          "ciLow": 70.31,
          "ciHigh": 95.85
        },
        {
          "state": "PA",
          "stateName": "Pennsylvania",
          "sampleSize": 6,
          "rawMean": 81.67,
          "pooledMean": 82.67,
          "shrinkage": 0.404,
          "ciLow": 70.79,
          "ciHigh": 94.55
        },
        {
          "state": "NH",
          "stateName": "New Hampshire",
          "sampleSize": 3,
          "rawMean": 76.67,
          "pooledMean": 81.66,
          "shrinkage": 0.253,
          "ciLow": 68.36,
          "ciHigh": 94.95
        },
        {
          "state": "AL",
          "stateName": "Alabama",
          "sampleSize": 3,
          "rawMean": 76.67,
          "pooledMean": 81.66,
          "shrinkage": 0.253,
          "ciLow": 68.36,
          "ciHigh": 94.95
        },
        {
          "state": "NV",
          "stateName": "Nevada",
          "sampleSize": 1,
          "rawMean": 65.0,
          "pooledMean": 81.48,
          "shrinkage": 0.101,
          "ciLow": 66.9,
          "ciHigh": 96.07
        },
        {
          "state": "TX",
          "stateName": "Texas",
          "sampleSize": 13,
          "rawMean": 78.85,
          "pooledMean": 80.67,
          "shrinkage": 0.595,
          "ciLow": 70.88,
          "ciHigh": 90.47
        },
        {
          "state": "WI",
          "stateName": "Wisconsin",
          "sampleSize": 2,
          "rawMean": 65.0,
          "pooledMean": 79.97,
          "shrinkage": 0.184,
          "ciLow": 66.07,
          "ciHigh": 93.86
        },
        {
          "state": "VA",
          "stateName": "Virginia",
          "sampleSize": 2,
          "rawMean": 65.0,
          "pooledMean": 79.97,
          "shrinkage": 0.184,
          "ciLow": 66.07,
          "ciHigh": 93.86
        },
        {
          "state": "AK",
          "stateName": "Alaska",
          "sampleSize": 2,
          "rawMean": 65.0,
          "pooledMean": 79.97,
          "shrinkage": 0.184,
          "ciLow": 66.07,
          "ciHigh": 93.86
        },
        {
          "state": "NE",
          "stateName": "Nebraska",
          "sampleSize": 2,
          "rawMean": 62.5,
          "pooledMean": 79.51,
          "shrinkage": 0.184,
          "ciLow": 65.61,
          "ciHigh": 93.4
        },
        {
          "state": "IL",
          "stateName": "Illinois",
          "sampleSize": 4,
          "rawMean": 63.75,
          "pooledMean": 77.25,
          "shrinkage": 0.311,
          "ciLow": 64.48,
          "ciHigh": 90.02
        },
        {
          "state": "HI",
          "stateName": "Hawaii",
          "sampleSize": 1,
          "rawMean": 0.0,
          "pooledMean": 74.89,
          "shrinkage": 0.101,
          "ciLow": 60.31,
          "ciHigh": 89.48
        },
        {
          "state": "NM",
          "stateName": "New Mexico",
          "sampleSize": 5,
          "rawMean": 58.0,
          "pooledMean": 74.2,
          "shrinkage": 0.361,
          "ciLow": 61.9,
          "ciHigh": 86.5
        },
        {
          "state": "OH",
          "stateName": "Ohio",
          "sampleSize": 6,
          "rawMean": 60.0,
          "pooledMean": 73.92,
          "shrinkage": 0.404,
          "ciLow": 62.04,
          "ciHigh": 85.8
        }
      ]
    }
  ],
  "quantitativeMethodology": {
    "approach": "Derived scores are normalized to 0-100, then summarized with descriptive comparisons, regularized state-aware models, and partial-pooling state estimates.",
    "modelingNote": "Coefficient tables come from ridge-regularized additive models with state controls and bootstrap percentile intervals, intended for pattern finding rather than confirmatory inference.",
    "limitations": [
      "This is a cross-sectional survey, so models show association rather than causation.",
      "The sample is modest and uneven across states and subgroups.",
      "Estimates should be read as directional and exploratory, especially when intervals are wide."
    ]
  },
  "qualitativeMethodology": {
    "approach": "Open-ended responses are coded with a transparent theme codebook and lightweight stance rules where AI attitude language is explicit.",
    "codingUnit": "Each response to each open-ended survey question is treated as its own coded unit.",
    "limitations": [
      "Theme coding is interpretive and may miss nuance or multi-layered meanings.",
      "The current build uses reproducible rule-guided coding plus a blinded double-coding workflow, but true human agreement depends on a completed second-coder file.",
      "Theme frequency indicates recurrence, not importance or causal force."
    ]
  },
  "qualitativeValidation": {
    "status": "awaiting_human_second_coder",
    "sampleSize": 36,
    "report": null,
    "note": "A blinded sample and coding key have been exported. Agreement becomes active when a completed human second-coder file is placed in scripts/human_double_coding_completed.csv."
  },
  "privacySummary": {
    "anonymous": true,
    "summary": "The public app is anonymized: it excludes response identifiers and exact response dates, keeps only state-level geography, and redacts obvious personal or institutional references from exported text excerpts.",
    "safeguards": [
      "Response IDs are removed from the public dataset.",
      "Exact response dates are removed from the public dataset.",
      "Only state-level geography is retained publicly.",
      "Public quote excerpts are sanitized for links, contact details, and detected place or institution names.",
      "Appendix files use sanitized text and anonymous sample IDs."
    ],
    "sanitizedResponseCount": 37,
    "redactionCounts": {
      "domain": 2,
      "organization_pattern": 6,
      "person_intro": 43,
      "url": 1
    },
    "publicFieldsRemoved": [
      "responseId",
      "recordedDate",
      "city",
      "district"
    ]
  },
  "appendixCatalog": [
    {
      "label": "Measurement audit table",
      "description": "Score reliability, coverage, and component diagnostics for the derived measures.",
      "href": "appendix/measurement-audit.csv",
      "format": "csv"
    },
    {
      "label": "Model summary table",
      "description": "State-aware ridge model summaries for the main quantitative outcomes.",
      "href": "appendix/model-summary.csv",
      "format": "csv"
    },
    {
      "label": "Model coefficient table",
      "description": "Bootstrap-banded coefficients from the state-aware ridge models.",
      "href": "appendix/model-coefficients.csv",
      "format": "csv"
    },
    {
      "label": "Partial-pooled state estimates",
      "description": "Empirical-Bayes state estimates for the core score metrics, useful when geography matters.",
      "href": "appendix/state-pooled-estimates.csv",
      "format": "csv"
    },
    {
      "label": "Score definitions",
      "description": "Component-level definitions for each derived score used in the app.",
      "href": "appendix/score-definitions.csv",
      "format": "csv"
    },
    {
      "label": "Theme codebook",
      "description": "Theme definitions, inclusion cues, and boundary rules for the qualitative layer.",
      "href": "appendix/theme-codebook.csv",
      "format": "csv"
    },
    {
      "label": "Text question coverage",
      "description": "Coverage and dominant themes for each open-ended survey question.",
      "href": "appendix/text-question-coverage.csv",
      "format": "csv"
    },
    {
      "label": "Blinded double-coding sample",
      "description": "Anonymous open-response sample for a second coder to label without seeing the primary codes.",
      "href": "appendix/blinded-double-coding-sample.csv",
      "format": "csv"
    },
    {
      "label": "Primary coding key",
      "description": "Primary theme and stance assignments for the blinded validation sample.",
      "href": "appendix/primary-coding-key.csv",
      "format": "csv"
    },
    {
      "label": "Qualitative agreement report",
      "description": "Current status of the double-coding workflow and any available agreement statistics.",
      "href": "appendix/qualitative-agreement-report.csv",
      "format": "csv"
    },
    {
      "label": "Privacy safeguards",
      "description": "Public-data safeguards and redaction counts used to keep the website anonymous.",
      "href": "appendix/privacy-safeguards.csv",
      "format": "csv"
    }
  ],
  "themeCatalog": [
    {
      "id": "creativity",
      "label": "Creativity & ideation",
      "description": "AI or digital tools are framed as a spark for new ideas, references, iteration, or possibility.",
      "inclusionCues": [
        "idea generation",
        "brainstorming",
        "reference seeking",
        "iterative experimentation"
      ],
      "boundaryNote": "Use when respondents describe expansion of possibility or ideation, not simply general enthusiasm about technology.",
      "analyticUse": "Helps separate opportunity-oriented narratives from workflow or policy talk."
    },
    {
      "id": "efficiency",
      "label": "Planning & workflow",
      "description": "The response emphasizes planning, workflow efficiency, administrative help, or faster production.",
      "inclusionCues": [
        "lesson planning",
        "faster preparation",
        "assessment support",
        "workflow streamlining"
      ],
      "boundaryNote": "Use when time-saving or production support is central, rather than broader institutional barriers.",
      "analyticUse": "Surfaces practical adoption rationales in classroom planning and administration."
    },
    {
      "id": "ethics",
      "label": "Ethics & authorship",
      "description": "The response raises originality, copyright, authorship, ownership, bias, or misinformation concerns.",
      "inclusionCues": [
        "copyright",
        "ownership",
        "authorship",
        "bias or misinformation"
      ],
      "boundaryNote": "Use when normative or legal concerns are explicit, not when respondents simply express discomfort.",
      "analyticUse": "Captures value conflict and legitimacy concerns around AI-mediated making."
    },
    {
      "id": "skillLoss",
      "label": "Skill loss & over-reliance",
      "description": "The response worries that AI shortcuts or over-reliance could weaken skill-building or creative struggle.",
      "inclusionCues": [
        "shortcut worries",
        "over-reliance",
        "loss of fundamentals",
        "reduced struggle or practice"
      ],
      "boundaryNote": "Use when respondents focus on weakened skill-building, not when they only mention ethics or policy.",
      "analyticUse": "Separates pedagogical concern about learning processes from governance concerns."
    },
    {
      "id": "access",
      "label": "Access & inclusion",
      "description": "The response points to accessibility, support for varied learners, differentiation, or lowering barriers to participation.",
      "inclusionCues": [
        "support for varied learners",
        "differentiation",
        "accessibility",
        "lowering participation barriers"
      ],
      "boundaryNote": "Use when inclusion or learner access is foregrounded, not merely when support in general is mentioned.",
      "analyticUse": "Highlights equity-oriented rationales for digital and AI integration."
    },
    {
      "id": "engagement",
      "label": "Student engagement",
      "description": "The response centers on student interest, motivation, reflection, parent visibility, or stronger participation.",
      "inclusionCues": [
        "motivation",
        "interest",
        "participation",
        "reflection or portfolio sharing"
      ],
      "boundaryNote": "Use when student attention or participation is the main emphasis, rather than tool use alone.",
      "analyticUse": "Captures how respondents describe classroom energy and audience connection."
    },
    {
      "id": "training",
      "label": "Training & teacher growth",
      "description": "The response references coursework, workshops, comfort-building, research, or professional development.",
      "inclusionCues": [
        "professional development",
        "workshops",
        "coursework",
        "comfort-building or self-learning"
      ],
      "boundaryNote": "Use when teacher learning or credentialing is explicit, rather than a general request for resources.",
      "analyticUse": "Makes capacity-building needs visible across subgroups."
    },
    {
      "id": "barriers",
      "label": "Barriers & policy limits",
      "description": "The response describes blocking policies, district hesitation, budget limits, or tool constraints.",
      "inclusionCues": [
        "district limits",
        "policy blocks",
        "budget constraints",
        "hardware or software access issues"
      ],
      "boundaryNote": "Use when structural or institutional constraint is central, not merely when teachers describe workload.",
      "analyticUse": "Tracks implementation friction and organizational constraint."
    },
    {
      "id": "making",
      "label": "Media-making workflows",
      "description": "The response describes concrete creative workflows, projects, or production tools used in classrooms.",
      "inclusionCues": [
        "production workflows",
        "named creative tools",
        "animation or video making",
        "classroom project techniques"
      ],
      "boundaryNote": "Use when respondents describe concrete making practices, not when they only discuss attitudes toward technology.",
      "analyticUse": "Connects abstract views to actual classroom media-making practice."
    }
  ],
  "textQuestionCatalog": [
    {
      "id": "priorInfluence",
      "label": "Professional experiences shaping practice",
      "section": "Profile",
      "supportsStance": false
    },
    {
      "id": "mediaDefinition",
      "label": "How teachers define media arts",
      "section": "Media arts",
      "supportsStance": false
    },
    {
      "id": "techEnhanced",
      "label": "Technology that boosted teaching or engagement",
      "section": "Technology",
      "supportsStance": false
    },
    {
      "id": "mediaProject",
      "label": "Media arts projects with strong student impact",
      "section": "Media arts",
      "supportsStance": false
    },
    {
      "id": "aiFuture",
      "label": "How AI could change the future of art education",
      "section": "AI",
      "supportsStance": true
    },
    {
      "id": "aiUseful",
      "label": "When AI was especially useful in teaching",
      "section": "AI",
      "supportsStance": true
    }
  ],
  "textQuestionCoverage": [
    {
      "id": "priorInfluence",
      "label": "Professional experiences shaping practice",
      "responseCount": 128,
      "codedCount": 78,
      "topThemes": [
        {
          "themeId": "training",
          "count": 30
        },
        {
          "themeId": "access",
          "count": 26
        },
        {
          "themeId": "making",
          "count": 19
        }
      ]
    },
    {
      "id": "mediaDefinition",
      "label": "How teachers define media arts",
      "responseCount": 107,
      "codedCount": 53,
      "topThemes": [
        {
          "themeId": "making",
          "count": 30
        },
        {
          "themeId": "skillLoss",
          "count": 22
        },
        {
          "themeId": "creativity",
          "count": 13
        }
      ]
    },
    {
      "id": "techEnhanced",
      "label": "Technology that boosted teaching or engagement",
      "responseCount": 129,
      "codedCount": 107,
      "topThemes": [
        {
          "themeId": "engagement",
          "count": 50
        },
        {
          "themeId": "making",
          "count": 47
        },
        {
          "themeId": "creativity",
          "count": 24
        }
      ]
    },
    {
      "id": "mediaProject",
      "label": "Media arts projects with strong student impact",
      "responseCount": 115,
      "codedCount": 77,
      "topThemes": [
        {
          "themeId": "making",
          "count": 53
        },
        {
          "themeId": "skillLoss",
          "count": 20
        },
        {
          "themeId": "creativity",
          "count": 19
        }
      ]
    },
    {
      "id": "aiFuture",
      "label": "How AI could change the future of art education",
      "responseCount": 128,
      "codedCount": 93,
      "topThemes": [
        {
          "themeId": "skillLoss",
          "count": 39
        },
        {
          "themeId": "creativity",
          "count": 36
        },
        {
          "themeId": "ethics",
          "count": 29
        }
      ]
    },
    {
      "id": "aiUseful",
      "label": "When AI was especially useful in teaching",
      "responseCount": 106,
      "codedCount": 71,
      "topThemes": [
        {
          "themeId": "creativity",
          "count": 30
        },
        {
          "themeId": "making",
          "count": 26
        },
        {
          "themeId": "barriers",
          "count": 16
        }
      ]
    }
  ],
  "respondents": [
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] research and advancement so I dedicate my time to my educational growth",
          "themes": [
            "training",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Art is nature while I would say media arts is the evolution of nature",
          "themes": [],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "training"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "MD",
      "stateName": "Maryland",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "During the pandemic, I took a class on how to teach art virtually. This class consisted of projects that utilized google draw.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is creating artwork using technology.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I teach both visual arts and media arts. When I give my students a choice on media in the visual arts class a lot of them choose to use the iPads.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "When I first began teaching digital art, I had students follow a tutorial from a youtube creator, Art with Flo. After that project, students were very interested in using the techniques that she presented in that project. Students have also enjoyed creating animations in procreate.",
          "themes": [
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "There are a lot of resources out there on the internet, I think by using AI, it can help teachers be more specific on what they want to teach. As for art, it allows artists to find references that are exactly what they want.",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "All AI is blocked for teachers. I've used it with my personal iPad but it seemed cumbersome to have to import things from the iPad to my school computer.",
          "themes": [
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "engagement",
          "making",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "MO",
      "stateName": "Missouri",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My students are highly interested in digital illustration and other media arts, like game design, so I think it's important that I keep up with current technology.",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "I define it as any art that incorporates technology or digital media.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I recently taught a lesson in my beginner drawing class in which students generated AI reference photos for their work using Adobe Express. They still met the requirements for the traditional art project but I think the AI images pushed their ideas further than they would have gone with traditional sketching.",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I have several students in AP Art this year who produce work using Procreate on iPads, which we practiced in earlier courses.",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "There is certainly potential for negative impact in regards to hindering creativity, however I think the positive possibilities are far greater than the negative. When my students and I talk about it, I always equate it to how art had to change with the invention of photography. Art will always find a way, it just…",
          "themes": [
            "creativity",
            "skillLoss",
            "access"
          ],
          "stance": "mixed"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Private",
      "teachingBand": "Other",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": null,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 50.0,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Various trainings in digital media have helped me to become more comfortable using tech and Ipads in the classroom.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Using technological tools to drive artmaking or to aid in artmaking",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "My students frequently use SeeSaw to create reflections about their artwork. It has helped the students to bring closure to their work and also provides an opportunity for parents to see their work .",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "My 4th graders recently used Canva to design posters about themselves. This project provided a good blend of traditional and digital media as they drew all elements of their posters and uploaded them to the app, but then edited and designed the final poster within Canva.",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I am a bit concerned that AI could make art seem more canned, and make students think that using their hands is not as important. At the same time, I think AI could be very helpful in allowing students to imagine new possibilites, to edit their work and to do reflections and critiques.",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement",
            "barriers"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "See question 2. Those students used Canva's new \"background remover\" function to remove the backgrounds of drawings and photographs they'd taken. This helped so they could isolate elements of their posters. It also allowed them to edit the posters more easily.",
          "themes": [
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "CO",
      "stateName": "Colorado",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 0,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 8.3
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I started teaching college-level art classes right out of Grad school, teaching the way I had been taught. I did not get k-12 certification until I had taught college for 19 years (decided to move on since adjunct teaching is almost serfdom).",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Arts created through use of digital tools to some degree",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I require my students to create digital portfolios of their work in google slides. This experience is invaluable to them.",
          "themes": [
            "efficiency",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I do not teach media arts",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "[PERSON]'re outsourcing our creativity, instead of doing the work to teach kids how to ideate on their own. Remixing is not the same as originality.",
          "themes": [
            "ethics",
            "skillLoss"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It has given me a lot of experience",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using technology made it easier to explain and get to the children more",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I used an illustration from my computer to explain some certain stuffs and it was very good",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "In a Very positive way it opens up new possiblity",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I find It best during art project for illustrations",
          "themes": [
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "OK",
      "stateName": "Oklahoma",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Visual art processes that rely on technology",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using Adobe Firefly to start ideation when creating an original character",
          "themes": [
            "creativity",
            "ethics",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Digital painting of still life using photoshop",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "With parameters",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I have several",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "ethics",
          "making"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": null,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 58.3,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12",
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I participate in a lot of continuing ed which has impacted my relationship with technology as a teacher.",
          "themes": [],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": null,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It has directly influenced my teaching practices",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "involving traditional and digital media in production of art",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Students are currently building digital art portfolios that reflect learning all year; in one section, they have a concentration of digital media that shows specific learned skills and reflect their personal style and artist statement",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "The digital portfolio is a year long assessment tool that allows students to organize their work and to perfect their artist statement for 1-4 years of high school. At the end it may be applied to AP or college submissions. It is a game changer and has directly influenced my drive to making sure all students are…",
          "themes": [
            "efficiency",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I believe that AI is just one more tool at the hand of the artist. The real work is establishing and teaching ethics on how to use this tool responsibly. Art is more than learning skills- it is about communicating one's individuality and getting the message across to an audience. We need to educate our students to…",
          "themes": [
            "creativity",
            "ethics",
            "skillLoss"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I have primarily used it as a brainstorming tool. It is is not easy to describe a concept in the initial step of creating. AI helps to communicate what students are thinking and together, teacher and student get closer to creating an original idea.",
          "themes": [
            "creativity",
            "ethics"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "NV",
      "stateName": "Nevada",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I fully base my teaching on a learner/learner environment. Using photoshop with my digital photo classes - there are so many tools and updates each year in adobe that we learn as we go. Students also have different cameras, computers and software that changes how lessons are taught and we learn together what works…",
          "themes": [
            "access",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Digital media usage to complete a work of art. Using digital cameras, photoshop, illustrator, etc.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I use Brain Buffet for teaching Photoshop to my Digital photography students. This helps a lot for students that need to learn at their own pace instead of instructing with the whole class on photoshop.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "We use photoshop on a daily basis for Digital Photography learning how to crop, blend, merge photos together, create different filled backgrounds, etc. Students are required to complete Brain Buffet Photoshop Certification at the end of the year for credit.",
          "themes": [
            "access",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "negatively I feel students will become to reliable on AI for ideas rather than host their own original ideas for their artwork. Positively if feel their artwork could benefit from AI with new styles and ideas.",
          "themes": [
            "creativity",
            "ethics"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Surrealism Painting Project with my Honors Studio. Creating a painting with 4 or more objects they chose and they add a specific art era, like Baroque style octopus with lemons and horns.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "ethics",
          "making",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 50,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 0.0,
        "digitalReadiness": 37.5,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Access to technical support from IT staff,Support from school leadership or administrators,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Yes, my semester of student teaching and semester at a middle school has changed how I taught as well as solidified my opinion on technology in the art room.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using technology to have my students type their artistic statements has proven to be more useful and cohesive than if I had them write them out.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I do not use media arts in my classroom, a separate teacher covers media arts.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It will suck the creativity and joy from art for these students, making them even more dependent on technology and the content they find online. Students are already so uncreative and cannot come up with their ideas less they panic and beg for me to help them decide.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "No, and I refuse to use AI.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "skillLoss"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "PA",
      "stateName": "Pennsylvania",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 75.0,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "I have not faced any challenges",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Ceramics degree from [ORGANIZATION] of Art influenced how I teach Ceramics I & II courses. We have digital Photography courses 1 - 4 and AP Digital Photography. I utlize ipad for Art Club, Mural Club and Studio Art courses. Have taken courses in ProCreate so that I can teach students how to use the program.",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Students were struggling with perspective and we went around campus to take photos using cell phones, ipads and used a grid to help determine how many points the perspective is: ie: one pt, two pt... three pt.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I believe we can use AI to assist with writing lessons, planning curriculum, writing emails... HOWEVER, I do not think it should replace us. We need to revise, refine and make sure that the focus is what we intended as much can be lost in translation when using AI to assist.",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Lesson plan on Art Nouveau using principles of art & design. It was helpful but still required refinements, specifically to what my expectations were for my students. It did help to set up the historical elements that outlined what the Art Nouveau movement was.",
          "themes": [
            "efficiency",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "efficiency",
          "making",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "NH",
      "stateName": "New Hampshire",
      "schoolType": "Public",
      "teachingBand": "Other",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 62.5,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "All kinds of things including my student teaching, experience, Professional development opportunities etc.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "During covid and then after we did a stop motion animation project which was awesome!",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "The stop motion project was meant for covid but continued because it was so awesome",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I'd definitely be afraid of students not producing their own ideas as much but I also think things like painting on a tablet or stop motion animation have already proven to be great.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I'd really like to use AI to generate images exactly how students want them to be.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "making",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "PA",
      "stateName": "Pennsylvania",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 50,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 58.3,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "In undergrad, I completed animation classes using old computers, graphic arts design (pre computer). As a professional educator, I have dabbled with photoshop. My knowledge is limited due to the media that I teach.",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using resources on line such as videos and articles have been helpful - this was imperative with covid and online classes.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I have no idea... I have used AI with figure drawing when making super hero drawings from everyday objects.",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I feel there is a place for it... but I also think that there should be space for traditional materials and production or it will become a lost art form.",
          "themes": [
            "skillLoss"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I have used AI with figure drawing when making super hero drawings from everyday objects. There is not a great way to monitor or evaluate how students are using AI with the project. It is great as a tool that they can create a resource to meet specific ideas that can be used as a reference in their art. Again-…",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "KY",
      "stateName": "Kentucky",
      "schoolType": "Other",
      "teachingBand": "Other",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 50.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {},
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I think integrating technology is important not only to stay current with educational trends and increasing efficacy, but also in order to teach students how to integrate and utilize the newest tech. I think the future will favor those who are creators rather than consumers of tech and art is the perfect place to…",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Integrating technology to enhance or create visual art or other genres of fine art",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "After Covid, making sure to video my demonstrations is key to creating equity for all learners. Some may need to repeat the information, or slow it down while others use captioning for language barriers. I also use AI for brainstorming with students.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I don't have a specific project, but regularly use [LINK] to upload all student work. Not only does this give me a chance to fulfill the standard of creating a portfolio, but also creates and opportunity for students to learn photography skills and allow me to share digital galleries with the community and beyond!",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "While I think that AI can help to encourage creativity, it must be used responsibly and teaching students the ethics of copyright falls within arts objectives already. It can help to reinforce existing expectations while also encouraging students to push their own limits and boundaries.",
          "themes": [
            "ethics"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "When thinking of ideas for sustained investigation, we use google notebook to upload college board rubrics, teacher websites, and published sustained investigations to create a springboard upon which to draw and add to.",
          "themes": [
            "creativity",
            "efficiency"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "NM",
      "stateName": "New Mexico",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 0,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 0.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 41.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It brings a focus on craftsmanship to my classroom, as in making art that is ready to be purchased.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as any practice that utilizes digital technology to create or view art.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I have had students with chronic diseases utilize assignment information online to keep up while recovering.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I have not done a lot of media arts projects, but we made flip books one year and turned them into GIFs, which the students seemed to enjoy (especially sharing on their socials).",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it will make the expertise of the art teacher seem irrelevant to administrators and art teachers will lose their jobs. If you can upload a photo to an AI engine and ask it for critique, what does the art teacher do other than clean the room and cut paper? I also think it will confuse students about plagiarism.",
          "themes": [
            "ethics"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "ethics"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "SC",
      "stateName": "South Carolina",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 25,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 27.7,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have taken the [ORGANIZATION] course at Mass Art in Boston. I follow the teaching for artistic behavior pedagogy.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "During Covid, I created a virtual classroom using Google slides. It was very comprehensive and had literally hundreds of choices for art-making. Students could access it from home and stay involved in art while we were out of school. I still use this material during inclement weather, when students are home from…",
          "themes": [
            "efficiency",
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "[PERSON] using QR codes, linked to the Wikipedia page about Piet Mondrian, to serve as the black and white for Mondrian - inspired art pieces that we will use as ornaments for the studio Christmas tree. We will use a larger QR code for interested parties to use to look up the article on Mondrian.",
          "themes": [
            "creativity",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "[PERSON], but my thoughts currently are focused on how to avoid plagiarism in the arts. Additionally, I wonder how much of the student's vision will be replaced by AI, in the end.",
          "themes": [
            "ethics"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 50,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 16.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12",
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g.",
          "devices",
          "software)",
          "Other (please specify)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I am a NBCT ('08, renewed '18). That process helped me see the value in reflective writing and making sure each student was showing growth. I completed my master's online which has now led to me teaching online art appreciation courses. My students all have chromebooks and use them for Canvas classroom, Artsonia…",
          "themes": [
            "access",
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is the use of technology in a broad range of forms to create technology based artworks. This can be through digital art created completely on a computer or combined with analog art making.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I regularly share how-to videos for students to learn from in our Canvas classrooms. This helps students build confidence. I can also monitor their progress through students uploading images to artsonia of their completed work.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I do a VERY limited amount of media arts. Almost none. We only have chromebooks so the options are few. They have created travel posters with Canva and played with online animation programs.",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It can be helpful for teachers by helping with menial tasks like writing discussion questions and lesson plans. It can be a hinderance when students are working independently and rely to heavily on AI to do all their work for them. It is a negative in art because it steals from other's work and isn't original to the…",
          "themes": [
            "efficiency",
            "ethics",
            "skillLoss"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I use it for writing discussion/thinking questions based on artworks.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Other",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": null,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 58.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "This is a strange question. Wouldn't all previous teaching, educational, or other professional experiences influence your current teaching practices? Being an educator is being reflective and using past practice and data to inform current practices.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "engagement"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": null,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 50,
        "aiRelevance": 0,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 0,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 33.3,
        "digitalReadiness": 50.0,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I use my experience to help my students by facilitating their learning.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is art that uses electronic devices /digital media to create the final product.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "It has helped students create art.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Character design. Layering into backgrounds.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "If done correctly positively, however done badly it will be negatively impacting.",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "WI",
      "stateName": "Wisconsin",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 91.7,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Every moment is a teaching moment, I learn most from veteran staff whether teacher, ea, community connectors, admin",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "My lesson planning, using chatbot to enhance my ideas, filling in related artists, it is a god send",
          "themes": [
            "creativity",
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Every lesson I have created on chatbot",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Better understanding of the uses and limits of AI tools",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "any lesson plan",
          "themes": [
            "efficiency"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "NC",
      "stateName": "North Carolina",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 61.0,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] and more with the improvement of AI software. I have training through the school district on AI and some background in graphic design.",
          "themes": [
            "training",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Any art form that incorporates the use of technology in its making.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "During Covid shutdown ALL work was completed digitally and I met with my students via Zoom.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Digital Collage self-portraits.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I do worry that many students are not actually prepared for this technology. They do not have the discernment needed to understand what is real versus what is a deep fake. Also, they can become disengaged and fail to learn the content when answers and images are easily generated for them without much effort.",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Photo collage projects and Canva graphic design projects.",
          "themes": [
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "making",
          "training"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Unspecified",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": null,
        "aiReadiness": 58.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I graduated with a degree in Art Education certified K-12. I immediately entered the field teaching at the high school level at [ORGANIZATION]. This year, I took a new position at [ORGANIZATION] teaching high school art. I got my Master' degree in Administration but do not intend to use it.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is the integration of technology as a means of artmaking",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I recently used technology to create a Peter Max inspired portrait of two special needs students in my classroom. Using PhotoPea, I outlined the shapes of their face and added shapes in the background. I printed these for these two students to color so that they could access the curriculum and learn about an artist…",
          "themes": [
            "creativity",
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I face a lot of push back from my students when I incorporate media arts projects. I believe they suffer from technology burnout and look to art class to be a hands-on zone. However, the media arts project that kids get really excited for is stop-motion animation. I have students get into pairs and create a…",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI has the chance to ease the burden on teachers who are tasked with so much administrative work. Using AI to generate lesson plans, craft rubrics, make slides etc has changed the way I view the profession. [PERSON] my energy where it matters, on the kids.",
          "themes": [
            "efficiency"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I always use AI to generate my lesson plans and rubrics. Having AI to format and write my ideas into lesson plans is incredibly helpful and a huge time saver. I have never had students use AI in their projects.",
          "themes": [
            "creativity",
            "efficiency",
            "barriers"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "AL",
      "stateName": "Alabama",
      "schoolType": "Private",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 50,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 55.7,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Current teaching practices are largely influenced by student population, supply budget, and course load",
          "themes": [
            "training",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "...",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I do not have an example of one.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It depends on how it's used. If teachers don't learn how to incorporate it appropriately into their classes, students will not learn how/when to use it appropriately either. Teachers MUST lead the way for their students in this area.",
          "themes": [],
          "stance": "uncertain"
        },
        "aiUseful": {
          "text": "I have used DALL-E as an image generator for students to use as reference photos for paintings and drawings....for example, I had a student who was trying to draw an image of two wooden drawing mannequins in a traditional ballet lift. However, the mannequins in the room were incapable of being physically set up in…",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "CT",
      "stateName": "Connecticut",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 25,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 33.3,
        "digitalReadiness": 44.3,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have read several books on student voice and choice and I just finished reading Anxious Generation which has caused me to revamp how I use technology in my classroom.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "I would define media arts as any creative outlet that uses technology to create the final product.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "My 8th graders do a unit on digital photography that would not be possible without the digital cameras themselves as well as the chromebooks. I also teach a graphic design mini-unit in 7th grade where students can create their own images using digital drawing or they can use gen AI to create images for their designs.…",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "My students seem to really enjoy both the digital photo unit and the graphic design unit. The photo unit helps them take better pictures with their devices as well as sets them up for more serious photography in the future. The graphic design unit is fun because students have the opportunity to print their designs on…",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I worry that students will feel even more indifferent about acquiring the skills of drawing, painting, and creating. Drawing is about so much more than just the physical skill, it is about seeing and analyzing and there were already so many grumbles of \"why does this matter\" even before AI could draw anything they…",
          "themes": [
            "skillLoss"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "The graphic design project I mentioned earlier. Not all students choose to use the AI image generator, but it is a nice option to have for students who have something very specific in mind that doesn't already exist in an image search and would be too difficult for them to draw.",
          "themes": [
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 58.3,
        "digitalReadiness": 52.7,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It's given me a more practical approach to teaching, with sustainability in mind. It encourages me to inspire students to be exposed to all aspects of art, and to see how it is used in a business setting as well as a fine art, expressive setting",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is art that uses technology such as computers, or tablets to create a piece of art. It can be used in many forms, collaboration with other artists, live art, syncing artists from various locations. It can be a form of video, utilize sound ,or a collage of everything already mentioned.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "It allowed instant feedback from students and engagement.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "We used google slides to give presentations on artists that we have researched. I also made posters on Canva using their templates and that allowed the students exposure to graphic design in a more user friendly way.",
          "themes": [
            "efficiency",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Reliability on AI creating answers and images for the students, students lose their sense of ownership and identity in a piece. Distances the work from the artist.",
          "themes": [
            "ethics"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I have not used AI yet, but I have found it funny when I see famous people's faces on trending images, or dances.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "MO",
      "stateName": "Missouri",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 0,
        "aiComfort": 50,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 50.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I am a member of MAEA and I go to conferences where I have been exposed to media arts. My school district uses google and I have been able to create some digital art using google slides.",
          "themes": [
            "efficiency",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is using technology to create art.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Students were using their chromebooks and google slides to create a portrait of an animal. They were very excited about this project and some students even went home to create another portrait.",
          "themes": [
            "efficiency",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Students were using their chromebooks and google slides to create a portrait of an animal. They were very excited about this project and some students even went home to create another portrait.",
          "themes": [
            "efficiency",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "[PERSON].",
          "themes": [],
          "stance": "uncertain"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency",
          "engagement"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Private",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "TAB conferences and workshops @ NAEA have helped me find classroom systems that serve my students well.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Creative expression using digital platforms to record, create and display work",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "When creating sketches to plan for a new project, we use Canva to unify ideas into a coherent piece. Then we create traditional art based on the sketch",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "All of my students from preschool to Middle school are now connected to See Saw. The engagement with our families has greatly enhanced the visibility of our Fine Arts program.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI could be used to offer accessibility to students who struggle with traditional processes or it could be used to take short cuts, skipped valuable skill building that comes with the rigor of traditional art.",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "We recently used AI tools in Canva to generate ideas for Christmas cards that would reflect our campus identity.",
          "themes": [
            "creativity",
            "engagement",
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "PA",
      "stateName": "Pennsylvania",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I am a lifelong learner who wants to remain current and relevant in the field of education. [PERSON] experience that can add to my teaching tool box. Teaching K-12, as well as at the college level, has challenged me to continuously refine and hone my teaching practices.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "To put it simply, I would define media arts as processes and products that utilize electronic means to create.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "When step-by-step instructions are needed for technique practice, students are engaged when videos are used for the delivery. This is especially true when a student is catching up after an absence.",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Logo design is always a good digital art project that allows students to look at the world through an art lens.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI will require teachers to be more aware consumers and producers. Students will need to be taught to be even more aware of visual culture and the impact AI has on understanding their environment.",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Creating a presentation for a lesson or topic can get time consuming. As a creative person, I like to add too much and then refine the content later. AI can give me a summary of my thoughts and make the creation of presentations much more focused and less time consuming.",
          "themes": [
            "barriers"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "engagement",
          "making"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 0.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Art created with the assistance of digital tools",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Google Classroom has been enormously helpful for organizing class assignments and grading",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "The most helpful projects deal with teaching students how to take good digital photos and edit them",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think AI is extremely dangerous to the visual arts field and I don't have any interest incorporating it into my classes",
          "themes": [
            "engagement"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "efficiency",
          "engagement"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "WI",
      "stateName": "Wisconsin",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 75,
        "aiRelevance": 0,
        "aiComfort": 50,
        "aiConcern": 65,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 52.7,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies",
          "media arts",
          "or AI",
          "Support from school leadership or administrators",
          "Collaboration with other teachers",
          "Other (please specify)"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Any technology/media used to create materials for the purpose of communicating information visually.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Some of my students are creating art on tablets and have been asking for oportunities to create digital art on tablets in class. We can not afford a classroom of tablets, but I did get a donation from which I was able to purchase 23 Wacom drawing tablets. I've begun using them in my Graphic Communications class and…",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I really don't know yet. I think Ai will change everything. So [PERSON] more about it. It's just really hard, because my school district seems very hesitant to allow it's use.",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "engagement"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "PA",
      "stateName": "Pennsylvania",
      "schoolType": "Charter",
      "teachingBand": "Other",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Through coursework and learning the uses and benefits of technology I have grown to enjoy working, creating, and teaching in a cyber educational setting.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Integrating digital tools, software, apps, robotics, electronics, 3D printing, coding, AR/VR, digital photography, video editing, digital game-making, and beyond to facilitate and enhance students' creative practices, such as creating visual, multimedia, or interactive artworks. This could include using a combination…",
          "themes": [
            "skillLoss",
            "access",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "using AI to create grading rubrics, using pear deck to increase student engagement during class, using analytical data collection through Kahoot and Blooket to assess student understanding. Using AI to create accessible content in the reading level of my students.",
          "themes": [
            "efficiency",
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "The strongest impact that media arts has had with my student learning is creating accessible reading content for my students. Using the i read benchmarks and Lexile reading scores [PERSON] content match my students' reading abilities in fluency and comprehension.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "individualize instructional journeys and outcomes",
          "themes": [
            "access"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "The strongest impact that media arts has had with my student learning is creating accessible reading content for my students. Using the i read benchmarks and Lexile reading scores [PERSON] content match my students' reading abilities in fluency and comprehension.",
          "themes": [
            "access"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "efficiency",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "techEnhanced": {
          "text": "Tate Kids has free animated video profiles of important contemporary artists. My first-grade students were very engaged in a lesson inspired by the work of Yayoi Kusama. I believe their interest was elevated by viewing the video about her life.",
          "themes": [
            "creativity",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "When I was a \"regular\" classroom teacher, I used to work with my elementary students to create math music videos. Now that I teach art, I haven't yet had the time, flexibility, inspiration, or support to create a media arts project.",
          "themes": [
            "creativity",
            "access",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It could be very useful with formal lesson planning and creating assessment criteria that meets specific standards. I do have questions and concerns regarding ownership.",
          "themes": [
            "efficiency",
            "ethics"
          ],
          "stance": "mixed"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "MO",
      "stateName": "Missouri",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 77.7,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] media teaching tools.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "The ability to modify analog art with digital technology like photo restoration/ colorization using Adobe Photoshop.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Personalizing hobbies and interests using photo collages.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "The AI text-to-image like Fire Fly are a great creative tool to generate ideas and visual aids. The vocabulary building of genra, media and style helps students destiguish. Negative effects could be a dependence of AI which may stifle creativity.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I have allowed students to augment personal work by adding generative AI elements or backgrounds. I have also had students generate songs from lyrics they wrote.",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "SC",
      "stateName": "South Carolina",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I know digital artists in my personal and professional life. I consider their perspectives when discussing media arts in the classroom. I often look at digital technology as another tool artists can use to create.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts refers to artwork that utilizes digital communication tools.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I present my lessons using slides every day, embedding photos, videos, and websites that support the lesson. I also use them to help me follow the lesson plan without forgetting a reflection question or step.",
          "themes": [
            "efficiency",
            "access",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Digital photography is always a hit. We go for an \"art walk\" and use their ipad or Chromebook to photograph each other or props in the hallway.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it will be come a tool that we can utilize in the classroom and art studio. I do not think it will hinder people's creativity in general. I do worry about the use of AI for misinformation. I also worry about the impact of AI on art careers.",
          "themes": [
            "ethics",
            "skillLoss"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "IL",
      "stateName": "Illinois",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I attend many conferences and PD opportunities where I have learned more about how to best use and develop curriculum for tech and maker ed to use in my classroom. Being an Adobe Creative Innovator and being a part of the maker educator collective through Infosys has driven my content/software knowledge and…",
          "themes": [
            "skillLoss",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts involves creating and communicating through digital media, using devices or equipment as tools to help create imagery, sound, and/or multimedia projects.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Laser cutting and engraving is very engaging for my students. They love creating digitally then watching their creations come off the screen and onto wood, metal, and other materials. The laser cutter has allowed students to create 3d items and iterate quickly and has helped build community and allow students to…",
          "themes": [
            "creativity",
            "ethics",
            "skillLoss",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "We did an issue based photo display in our community that allowed students to share their ideas about stereotypes and how they affect our students. The display involved large scale student portraits wheat pasted onto our school walls (in the style of artist JR). We then collaborated with our drama class to take the…",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It allows students to iterate quickly and spend more time being in their ideas to life and trying new concepts rather than spending much of their time on technical tools to bring those ideas to life. On the flip side, it may hinder creativity for some students as they rely more on AI and less on ways to solve…",
          "themes": [
            "creativity",
            "skillLoss",
            "barriers"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "We love generating specific images to get across students' ideas when doing issue based poster making. It is much easier for students to describe exactly what kind of image they want to support their ideas, then use generative fill to quickly enhance or change parts of the image to help them communicate through…",
          "themes": [
            "creativity",
            "access",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "IL",
      "stateName": "Illinois",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": null,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have learned most current technologies on my own through online sources and PD conferences. I learned very little meaningful content through the traditional college route.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Use of technology and creativity to create a visual outcome",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using AI generated images is a game changer when reference photos are needed for traditional media. In particular, the ability to create a reference photo in a technique style is very helpful for students to see the breakdown.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Beyond AI images, other AI tools will create better workflow and generate more ideas. Rather than using it to do the work, it is a spark for creativity. No art teacher could just take what AI creates and say it is the best - it still needs our input, it needs our humanity, our voice.",
          "themes": [
            "creativity",
            "efficiency"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I've been using ChatGPT to ask questions about a clay image transfer project. I had questions answered that I would have never found on my own. It gave me the confidence to purchase materials and try something new. It also provided me with video tutorials that did not come up when I first looked on YouTube. I've also…",
          "themes": [
            "efficiency",
            "training",
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 25,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 0,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 66.7,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Lack of interest from students",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "This is quite a loaded questionâ€¦ [PERSON] to concisely answer. I take good and bad experiences and adapt them to my teaching.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts help engage students with work they're used to interacting multiple times a day and provide a way to explore, to understand it better, and discuss it.",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Yes- I used it to have them create a digital sketch which they then transferred to watercolor paper and then inked/colored",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I showed them how to design & create their own planner pages with specific categories on how they can plan their immediate future.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Another loaded questionâ€¦ a significant reason i love it is because i have attention issues and often struggle starting projects. if i have. a bunch of thoughts, i can type it into the generator and it can give me ideas that I would otherwise procrastinate and not start because i was overwhelmed!!",
          "themes": [
            "creativity",
            "access"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I had students imagine their own fictional folklore creature- a few facts- where it lived, what its main mischief would be, a few physical descriptorsâ€¦ then it spun a novel-like description. they were tasked with reading it and then drawing it digitally.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "VA",
      "stateName": "Virginia",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 91.7,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] STEAM lessons into my curriculum, and [PERSON] ways to integrate technology into my art classes.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Artwork that utilizes technology in it's creation and presentation.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I feel like every time that I use technology the student engagement is naturally higher! I recently taught a 5th grade photography self-portrait lesson using iPads and it went really well.",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "My students LOVE stop Motion animation. We made short videos using Legos, and several of my students downloaded the app on their personal devices and they still send me videos that they made at home even though it's been months since we used it.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I personally feel like AI has helped me to \"work smarter, not harder.\" I love chatGPT for grant writing and communication with parents. I haven't used it for lesson writing yet because my plans are so interactive and filled with videos, but I do see it as an idea generator. I don't see negatives for myself, but I do…",
          "themes": [
            "creativity",
            "engagement",
            "making"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I have used it to write short paragraphs on famous Americans for students that we were learning about for a portrait lesson. It was easy for me to make accommodations for different reading levels.",
          "themes": [
            "access"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "NM",
      "stateName": "New Mexico",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 50,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 25,
        "aiConcern": 25,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 47.3,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I mostly use traditional art media since I don't have access to the technology necessary to create digital art (or my digital devices are limited).",
          "themes": [
            "skillLoss",
            "access",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Arts that include a variety of media that might include access to technology.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I have done digital animation and it was really engaging. When I had ipads in my classroom, I did some photography editing which was great as an extension of learning.",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I like the idea of using AI to generate ideas and help students visualize ideas.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "NE",
      "stateName": "Nebraska",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 66.7,
        "digitalReadiness": 69.3,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "I define media arts as using various platforms to create digital work - I don't really consider my teaching of Digital Photography or Graphic Design to be media arts necessarily when the projects are intended to be viewed in print - not only in digital.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I have used Ai a few times to quickly generate a student recommendation letter for me to edit and kick out quickly; students find it useful to brainstorm titles for artworks",
          "themes": [
            "creativity",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I have not used it in a media arts project - beyond showing graphic design students that the AI generator gives similar ideas to all of us; and having Digital Photography students explore how they could make their slow shutter ghost images even creepier with Photoshop's AI generator - these were not serious projects…",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it could be positive if students are educated (along with teachers) about how AI is trained and ethical practices. Many of my students have a negative attitude about AI generated art and they may be curious but they really don't have much interest in making AI work because they think it looks so fake.",
          "themes": [
            "ethics",
            "engagement"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I used it in a unit with my Honors Art Seniors with the mentality that those of us who understand AI and know how to use it ethically and to speed up our work flow will be ahead of those who have been scared into never ever touching it. I taught students how AI models are trained and discussed ethical uses through a…",
          "themes": [
            "creativity",
            "ethics",
            "engagement",
            "training",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "engagement",
          "ethics",
          "making",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "WV",
      "stateName": "West Virginia",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 77.7,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Throughout the course of my career, I have adapted to the ever-changing use and potential of technology embedded within my teaching practice and the creative potential for my students. I have taken every opportunity to engage in professional development virtually and in person to improve my understanding of the use…",
          "themes": [
            "access",
            "engagement",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "The use of technology and tools to create and develop art",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I have used a flipped model within my art classroom giving students choice and learning modules and teacher created video lessons. This approach allowed students choice in projects and learning goals, students still maintained a high level of engagement and were able to learn through the videos while stopping…",
          "themes": [
            "access",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "In the last two years, I have added to our creative arsenal of tools, a set of laser cutters. Students are seeing the potential in drawing and printing their ideas into tangible products for students. This allows them to see how their creative ideas can become a tangible way to create and potentially sell items in…",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think AI tools can help with the management of paperwork and documentation creation, but it is imperative that educators do not blindly use AI tools without refinement",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I have used AI tools in brainstorming techniques and artists that may use particular tools and supplies. In further research, it has allowed me to become more aware of a broader spectrum of artists. I have enjoyed the virtual banter and brainstorming of ideas with AI tools and coming up with new lesson ideas",
          "themes": [
            "creativity",
            "training"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "making",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "MA",
      "stateName": "Massachusetts",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 58.3,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] with any media training (graphic design, social media, digital photo) in an art program with a team of 5. All other courses are fine arts focused with occasional tablet drawing lessons. My study was diverse from painting > animation and enabled me to teach all of the courses that we offer, our team is…",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making",
          "training"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "MN",
      "stateName": "Minnesota",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 50.0,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 41.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12",
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Workshops give ideas on how to incorporate different ideas and techniques. I primarily get influence from emerging science and professional artists about what can be used in what ways and adapted for classroom use.",
          "themes": [
            "creativity",
            "access",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media Arts is the use of digital tools to create and or display art through non-traditional media.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "We got 3D Printers for students to use. In my 9th grade art class they get a chance to learn 3D modeling and getting to have a physical product from that 3D model gave my students a physical return on their time investment. This made them want to try a lot harder than just having the non-tangible version.",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I can't think of any that had a stronger impact than normal.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Responsible AI use by teachers can enhance lessons or make a lot of paperwork much easier to handle. It could also take the personal aspect out of artistic feedback if used to automate that portion of grading as well, which would be a negative, personal feedback from a real person is much more valuable than from AI.…",
          "themes": [
            "efficiency"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I only use AI in my teaching to help come up with drawing prompts for short activities. Any prompts made with the help of AI help get the students thinking and using their imagination.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "As a industrial designer I was classically trained in most media especially 3D.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts often blur the lines between traditional art forms and modern technology, providing new ways to engage, communicate, and explore ideas.",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I teach computer graphics so everyday in that class. We are a google school so the google suite has been very helpful in instruction. I also use 3D printers in my 3D room. Along with exploring AI for idea generation.",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "See above with the computer graphics class and the use of 3D printers.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It is a double edge sword with students seeking creative ideas versus relying on tech for the ideas.",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "We used them to generate images from writing prompts for personal references when real references are not available.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "KS",
      "stateName": "Kansas",
      "schoolType": "Public",
      "teachingBand": "Other",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": null,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 0.0,
        "digitalReadiness": 77.7,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have been the art director for a children's summer camp for 16 years, I attend every state art ed conference and have attended multiple national NAEA conferences, not to mention social media and other opportunities to learn and grow in the field.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Using digital media and tools to create works of visual arts.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I like to use it to showcase student work and help them to plan out projects.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Using it as a tool to create brainstorming and planning ideas have really made their traditional art making better.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Negative, and it is already doing it. Large stores like Micheal's have AI coloring books out there, so traditional artists LOST A JOB - this is seen over and over again. Not to mention it steals works from artists. IT is DEVALUING the job of an artist. Soon art that has meaning, art that makes an impact won't exist.…",
          "themes": [
            "efficiency",
            "skillLoss"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I have not and I will not. As a matter of fact I explain to students what it is actually doing which is theft.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "IN",
      "stateName": "Indiana",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 0.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Media arts refers to the use of digital media technology to produce art or design with the purpose of communicating ideas.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "My Digital Design students really enjoy being able to give written feedback during critique via the comment feature on Google Slides. They create a personal presentation for each project and share it amongst team/class members to receive immediate and easily accessible feedback on their work.",
          "themes": [
            "efficiency",
            "access",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "My Digital Design students favor assignments that are focused on themselves as people and artists. Designs that prominently feature their name or their own image are very popular.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think that it is extremely important to differentiate between Generative AI software that uses text-to-image, such as Dall-E or Stable Diffusion which scrape \"public\" data, and Generative AI that uses ethically sourced analytical data gathered from inside their own system, such as Adobe Photoshop's \"Content Aware…",
          "themes": [
            "ethics",
            "access",
            "training",
            "barriers",
            "making"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I appreciate Adobe Photoshop's near-magic ability to identify the location of specific colored/valued pixels in an image so that I do not have to spend hours selecting an image by hand. That is where my (positive) relationship with generative AI in art ends.",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "WA",
      "stateName": "Washington",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 0.0,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not faced any challenges",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Having such a focus on digital technology in my teaching program caused me to keep it on the forefront of my practice moving forward keeping myself fluid and changing with the times. [PERSON] on technology and it's relevance in the lives of the people [PERSON]. I find it beneficial for building relationships, keeping…",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "The same way.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Creating an art historical figure that posts on the internet in modern day - what hashtags would they use, what would they choose to post pictures of and why, if they had access to digital art what direction would their art go next. Framing the assignment through a lens of social media and digital art tools, the…",
          "themes": [
            "access",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Creating an art historical figure that posts on the internet in modern day - what hashtags would they use, what would they choose to post pictures of and why, if they had access to digital art what direction would their art go next. Framing the assignment through a lens of social media and digital art tools, the…",
          "themes": [
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it will change it negatively affecting things like plagiarism and originality. The way that AI scrapes the internet for images without consent of artists goes against what we are trying to teach the students in every sense.",
          "themes": [
            "ethics"
          ],
          "stance": "negative"
        },
        "aiUseful": {
          "text": "I have used it as an idea generator for sculptures before - but honestly, there are random generator websites that do similar things with a little work on the student or teacher's part and that does the same thing without ethical concerns.",
          "themes": [
            "creativity",
            "ethics"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "ethics"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "OR",
      "stateName": "Oregon",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 0,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": 50,
        "aiOpenness": 0,
        "aiRelevance": 25,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 16.7,
        "digitalReadiness": 39.0,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies",
          "media arts",
          "or AI",
          "Support from school leadership or administrators",
          "Other (please specify)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I work hard to grow each year as an educator. The teaching profession has changes a lot during my career. I do not feel that my formal education was in line with what we are dealing with now- post covid, ai, tech in classroom. It is not the same as it was when I was in college even fifteen years ago.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts to me is using technology to create your art.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I have several students who prefer to work only digitally. The most recent one was a girl who scored a 5 on her AP portfolio with her digital illustrations.",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "[PERSON] now to help students create self portraits. They seem to take to the program very easily.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I have heard a lot of concerns from students about what the art world will look like and if there is even a future for them as a working artist.",
          "themes": [],
          "stance": "negative"
        },
        "aiUseful": {
          "text": "I have only used AI a handful of times to experiment with lesson planning and composition lesson where I used AI to create many compositions quickly. I thought it was a useful tool, but have concerns about students using it and authenticity.",
          "themes": [
            "efficiency",
            "barriers"
          ],
          "stance": "mixed"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency",
          "engagement",
          "making"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "SC",
      "stateName": "South Carolina",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My teaching journey in DA has been profoundly shaped by my previous experiences as an art educator and a student of both traditional and digital mediums. These experiences have taught me the value of practical time, the thoughtful selection of mediums, and the cultivation of motivation in the classroom.",
          "themes": [
            "skillLoss",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Making art using technology as a medium",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "When putting together a formal planing. I have the idea but AI tools generate similar ideas in seconds. That is like having a personal assistant to enhance the class experience.",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Photoshop biography collage. This is the first level and first assignment in this class. We also use different programs of technology to keep the work saved. That is a very motivating introduction to this software and how other types of technology can be part of the same project.",
          "themes": [
            "access",
            "engagement",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positive: assistance and shower of ideas. Negative: over dependance",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Lesson planing for PBL",
          "themes": [
            "efficiency"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "MD",
      "stateName": "Maryland",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 50,
        "aiRelevance": 0,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 33.3,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies",
          "media arts",
          "or AI",
          "Collaboration with other teachers",
          "Other (please specify)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Professional development within my school and online workshops.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Using technological media is visual communication arts",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I use our learning system to communicate, assess student work, provide assignments, direct students to learning resources, etc.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I do an artist research project in which students choose the presentation format. Many students choose technology as a way to present this (canva, powerpoint, imovie, wevideo).",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "positive-good way to brainstorm, generate ideas to build on, save time with rote activities (can give teachers time to plan more creatively). negative-it can be misused, problems with plagiarism, without guidance it can be detrimental to creativity",
          "themes": [
            "creativity",
            "efficiency",
            "ethics",
            "barriers"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I have not used AI in any lessons yet.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "efficiency",
          "ethics",
          "making",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "IN",
      "stateName": "Indiana",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 8.3,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I focus only on fine arts and do not allow technology into the classroom, as they are on iPads for everything else.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Resources for lesson plans integrated into power points for student visual aids.",
          "themes": [
            "creativity",
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "None.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Negatively by producing students with lack of imaginations and over reliance on past art to recreate into \"their artwork\" causing copyright infringments.",
          "themes": [
            "creativity",
            "ethics",
            "skillLoss",
            "barriers"
          ],
          "stance": "negative"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "efficiency",
          "ethics",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "MA",
      "stateName": "Massachusetts",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": null,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 58.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Started as a graphic design major and switched to education. Still pull from those teachings. Also am a practicing photographer and designer, so those skill sets are utilized in my teaching",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "It's a little oversimplified but for me the audience for fine art or visual art is the artist, and the audience for media arts or graphic arts is the client. For me it's about keeping I mind the end goals",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Added a 3D printer to my classroom and it has been a great tool for prototyping new ideas",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "My 7th grade does an \"invention\" unit and has to pitch their ideas to the class",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Could open up many new possibilities and enhance the ideation and making processes. Could shift focus from the creative process to a product-driven model, which will threaten art education",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Using Canva to ideate logo designs, slideshows, etc. Playing with Photoshop's generative fill tools",
          "themes": [
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "PA",
      "stateName": "Pennsylvania",
      "schoolType": "Other",
      "teachingBand": "Other",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 0,
        "digitalConfidence": 0,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 25,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 22.3,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Along with my art certification, [PERSON] teacher special education and I am a certified teacher of the blind. Having experience teaching in a classroom before becoming the art teacher has greatly benefitted me.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I use my smart tv monitor to show/listen to stories or biographies about artists",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think that AI can be a positive resource if not used to frequently or depended upon.",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "training"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "AL",
      "stateName": "Alabama",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 41.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "A similar definition. Use of technology to design a work of art.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Just recently, my students used Gelli plates to print textured papers with the intent to create collages. Gelli has a lesson plan wherein students collage birds using the papers. To help students understand the process and map out their final project, students used a drawing app, imported photos of their papers and…",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I used stop motion animation with my middle and high school students. They loved working collaboratively and created some very fun videos that I think they will remember for a long time. Most students think that creativity and art is tied to drawing and this was a concrete life lesson on creativity that had not a…",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "[PERSON] how quickly AI either makes a home and stays or it moves on. Is it a trend or is it here to stay? Also, how does it impact the work that goes into art shows that is supposed to be original work?",
          "themes": [
            "ethics"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "N/a",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency",
          "ethics",
          "making"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 50.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12",
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I am a technology fellow in my district",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Same",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Recently I've used AI to write outlines for lesson plans.",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI can help get things done more efficiently, but it does not change the intelligence or motivations of the user. Some people will take great advantage and some will appear to be of higher quality than they are. The latter will make it difficult to discern where the true quality exists and people will be advanced…",
          "themes": [
            "efficiency",
            "engagement"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency",
          "engagement"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "MD",
      "stateName": "Maryland",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 33.3,
        "digitalReadiness": 61.0,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I've learned to adapt and incorporate new technologies when I can. Often teaching myself as needed",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "The use of digital technology to enhance or create art works that may be physically tactile and represented in the world or digital.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I have recently started using it to help me develop slideshows and handouts focusing on art appreciation/art history. [PERSON] a new course and do not have access to updated materials (only a textbook from the 90s). I have found it saves me time. I do go back through the content created to edit and improve it.",
          "themes": [
            "access",
            "training",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I taught digital photography and one lesson in particular had a strong impact on a few students who later went on to pursue creative fields. It was a lesson on finding things in our physical world to photograph that could be used as lettering.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it can make our jobs a bit easier and help students who do not have natural talent to feel successful or confident. I worry that this younger generation will devalue traditional art though.",
          "themes": [
            "skillLoss"
          ],
          "stance": "negative"
        },
        "aiUseful": {
          "text": "I have used it mainly for slide show development and handouts. This has been a time saver for me.",
          "themes": [
            "efficiency",
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "efficiency",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "WA",
      "stateName": "Washington",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 25,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 65,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 41.7,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [],
        "resourcesNeeded": [
          "Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I teach at a fully remote public school. In some ways my position is vastly different than my previous experience. I taught face to face for 10 years in a general Ed classroom. My pass experience with a variety of different demographics is the knowledge that I use daily to meet my current students needs. Art is…",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is a collaboration of all forms of media , including technology, to create art.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I teach fully online. My job centers on ways I can engage my students in art through a digital platform.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I use Microsoft word paint tools. This has provided my students with a consistent and free media art platform.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "My biggest struggle with AI is authorship and students lack of plagiarism understanding. I think AI could positively impact students art if they are provided well thought out guard rails to use it creatively but ethically.",
          "themes": [
            "ethics",
            "access",
            "barriers"
          ],
          "stance": "mixed"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "engagement",
          "ethics"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 91.7,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My teaching internship during my MFA influenced the structure and routine of the classroom. Professional Development with educational technology and encouragement to integrate STEM in the classroom has influenced my use of digital technology.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is artmaking using digital/computer technology during the process of creating and/or as a final product.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I use video game environments to teach linear perspective and that has definitely increased engagement. Additionally, I use Adobe Firefly (because they commit to not scraping copyright images)to help students generate concept sketches for self-directed projects. It helps their paralytic reaction when given total…",
          "themes": [
            "creativity",
            "ethics",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I teach in an International Baccalaureate (IB) school and this year we participated in the \"No Place for Hate\" poster contest as part of our Creative Activity Service component. We use Canva and students who have limited technical ability really enjoyed being able to produce a polished artwork. The challenge is to…",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "[PERSON] now (and plan to pursue my PhD in Art with an emphasis on Art Education this fall 2025 engaging this very topic!) and I believe that with any emerging technology which tends to start off rogue can be detrimental without guardrails. I hit copyright hard at the beginning of all of my courses (long before AI)…",
          "themes": [
            "creativity",
            "efficiency",
            "ethics",
            "engagement",
            "training",
            "barriers",
            "making"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I only use Adobe Firefly at this point because of their commitment to using public domain and stock imagery (not perfect but better so far than Dall-E and Midjourney)and use text to image when generating ideas and compositions. I have a drawing project for a beginning drawing class where students are learning…",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "IL",
      "stateName": "Illinois",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 25,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 61.0,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to technical support from IT staff,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I hold a BFA in drawing and painting as well as an MSED El Ed. I was a working artist before going back to school to earn MSED El Ed. I then taught 5th grade in 3 different settings over the course of 20 years. Post retirement, [PERSON] art teacher one day a week for grades K-8 in a small town elementary school…",
          "themes": [
            "access",
            "training"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Technology means using the right tool for the job. Given this as a definition of technology, the instances in which I strive to use the right tool for the job are simply too numerous to mention.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it could be a positive influence.",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "training"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "NC",
      "stateName": "North Carolina",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": null,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 50,
        "aiOpenness": 25,
        "aiRelevance": 25,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 25.0,
        "digitalReadiness": 83.5,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "When I start teaching, we did not have as much technology as we do today as an example I used to have students gather around in a circle while I showed a demonstration on technique and now I use a document camera projected onto a Promethean board.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "The use of digital and technological programs to create art",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "A self portrait project where I took photos of each student, used photoshop to filter the face into shades of grey, then students painted on overhead projector film to create multiple versions of themselves.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Oops, see above",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "At the elementary level I see a tremendous downturn in students fine motor skills since iPads began being used by toddlers. I want to focus my classroom around hand crafting and building muscle strength and stamina.",
          "themes": [
            "skillLoss"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "NJ",
      "stateName": "New Jersey",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 50,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 0,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 41.7,
        "digitalReadiness": 75.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "By building confidence in the field",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "No but I use google slides extensively for art history lessons",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Students in grade 5 create a name design in google draw and apply special effects",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it will become a necessary evil like the internet and social media and will need to be closely monitored",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I haven't yet and would very much like to explore it",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "efficiency",
          "making"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 16.7,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "In innumerable ways! This question is extremely broad, but in order to be brief, I find constant inspiration from various sources, but it is through discourse, independent research, experimentation, and my artistic practice that most influence my current pedagogy.",
          "themes": [
            "creativity",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "I define media arts as the usage of non traditional artistic media such as animation and graphic design technologies to express visual concepts to further develop students' understanding of their world.",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Primarily with my neuro diverse students. Creating claymation sculptures and istop shorts was a pedagogical game changer.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Creating claymation characters and sets then filming shorts with sound and dialogue. This claymation workshop is always one of my most popular. I think in part because it appeals to so many types of learners.",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I don't think there is an either or answer here. I see some positives (appeal for a variety of leaners, variety of technologies and new possibilities to name two). [PERSON] see the negative side. I already see an over reliance and over usage in the elementary school of technology. [PERSON] a trend, particularly when…",
          "themes": [
            "creativity",
            "skillLoss",
            "access",
            "training",
            "barriers"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I have used Canva with students both to create my lesson slides and for them to create logos/learn basic graphic design.",
          "themes": [
            "efficiency",
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "VA",
      "stateName": "Virginia",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 50.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I feel that teaching students about careers in art is a necessity since having I have worked in the field in various capacities.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Art that includes digital, video, 3-d, painting/design and graphic design.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Utilizing AI to create lesson plans. AI often gives needed extensions etc that are sometimes difficult to develope.",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Creating mosaics for google drawing",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It would allow student to create artwork with few hand on mediums. This will be excellent for schools who do not have a large budget for the art department",
          "themes": [
            "skillLoss",
            "barriers"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "It has been extremely useful in creating lesson plans and keeping all lesson plans consistent.",
          "themes": [
            "efficiency"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "NC",
      "stateName": "North Carolina",
      "schoolType": "Public",
      "teachingBand": "Other",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 50,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 8.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 41.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "As a program supervisor in NC, there were several teachers wanting to teach Digital Media Arts. Over time, I developed the Digital Media Arts Department for [ORGANIZATION]. Created a Middle and [ORGANIZATION] Media Arts Curriculum Handbook. Hired Digital Media Arts teachers and provided media arts classrooms in high…",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Students that were not engaged during Covid without access to supplies, created a short video using Adobe Spark. THis included elementary students that were not engaging with regular classroom teacher",
          "themes": [
            "creativity",
            "access",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "IL",
      "stateName": "Illinois",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 50,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 0,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 33.3,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 58.3
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to technical support from IT staff,Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Because of the length of my career, I have adjusted my teaching based on current changes, and have let student interest guide those changes.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Contemporary arts that incorporate time art, digital technologies, mixed medias, or media used for advertisement that convey visual messages beyond traditional 2D or 3D media.",
          "themes": [
            "skillLoss",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "In my experience technology has been a double edged sword: While it has increased accessibility, opened possibilities to go paperless and more environmentally friendly, and has opened communication; it has also decreased student engagement in most instances: The students who are truly interested and personally…",
          "themes": [
            "creativity",
            "ethics",
            "access",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "When teaching social justice, and having student's learn digital editing; they have been very interested, and taken away meaningful experiences.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it will change it significantly, and there is no turning back; I fear it will be negative; I fear it will reduce student ability to think for themselves and think critically. Throughout my career I have seen a significant decrease in student engagement and critical thinking since the incorporation of…",
          "themes": [
            "engagement"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "In my digital photography classes; It has been useful in digital editing.",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "ethics",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Previous experiences inform my student-centered teaching approach, innovative lesson design, and ongoing professional development to deliver the best education for my students.",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Technology integration, through tools like interactive whiteboards and online platforms, enhanced student engagement, feedback, and accessibility, notably improving teamwork, creativity, and academic outcomes in group projects.",
          "themes": [
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Students created public service announcements on social issues, developing media arts skills and fostering critical thinking, creativity, and empathy, with a final community showcase promoting awareness and discussion.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI can enhance art education by providing personalized feedback, automating tedious tasks, and facilitating immersive learning experiences. However, it also risks homogenizing artistic styles and replacing human instructors. A balanced approach can harness AI's benefits while preserving human creativity and nuance.",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I would prefer to talk about this in the interview",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "techEnhanced": {
          "text": "Making use of video to teach has helped my students learn more, you know the saying a picture is worth more than a thousand words",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": null,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 100.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Not bad",
          "themes": [],
          "stance": "not_scored"
        },
        "aiUseful": {
          "text": "In every aspect",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Private",
      "teachingBand": "Middle",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It's have influenced me in a positive way, professional teaching has given me a different dimension and way of teaching which has impacted the students.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art often explore the intersection of technology, culture and the society and can be found in different form. Media art is been integrated into different part of the society.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Technology helps me to get maximum attention from my students and help in their concentration",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Music and colouring",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positively, integrating AI into the future of art education can help in self teaching and coaching",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "It's was useful in self teaching of music",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It has helped me to improve",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Artistic practices,technologies, and forms of creative expression that utilize various media formats such as video, digital art.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using technology has enhanced the student engagement because they have a clear picture of what is being taught",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Virtual reality",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positively",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Research assistance",
          "themes": [
            "training"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "engagement",
          "making",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Yes",
          "themes": [],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "NC",
      "stateName": "North Carolina",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Lack of interest from students",
          "I have not faced any challenges,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Previous experiences can really shape how we approach teaching. For example, worked with diverse groups, that might make more adaptable in methods.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art refers to artistic works that utilize digital technology and media as a primary medium of expression. This can include various forms such as video art, digital installations, interactive art, and sound art. Media art often explores the relationship between technology and culture, pushing the boundaries of…",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "One specific instance where technology significantly enhanced teaching and student engagement could be the use of interactive whiteboards in the classroom. For example, when teaching a complex subject like mathematics, using an interactive whiteboard allowed students to visualize problems in real-time. They could…",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "An impactful media arts project could be a digital storytelling assignment where students create short films based on personal narratives. In this project, students would use video editing software to combine their written stories with visuals, sound, and music. The process begins with brainstorming and writing their…",
          "themes": [
            "creativity",
            "skillLoss",
            "access",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI could significantly change the future of art education in both positive and negative ways. On the positive side, AI can provide personalized learning experiences, adapting to each student's unique style and pace. For instance, AI tools can offer instant feedback on students' work, helping them improve their…",
          "themes": [
            "creativity",
            "ethics",
            "skillLoss",
            "access"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "A specific project where AI tools could be particularly useful in teaching is a collaborative art creation project using AI-driven design software. In this lesson, students could work in groups to create a digital mural. They would start by brainstorming themes and concepts, then use AI tools to generate visual…",
          "themes": [
            "creativity",
            "engagement",
            "barriers",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "AK",
      "stateName": "Alaska",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "To a great extent, particularly in terms of uniqueness.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "A platform for creativity",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Intense in class rooms",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Art figure",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "More improvements",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Physical health",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "No",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts refers to diverse range of artistic practices that makes use of various forms of media for communications and creative expressions",
          "themes": [],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "AZ",
      "stateName": "Arizona",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Amazing",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "It refers to artwork that uses digital media,and electronic device as a primary,sound, animation and interactive element.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Enhance engagement:Interactive learning Enhance teaching:real time feedback",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Student created animated short film showcasing their personal stories, exploring themes like identity, culture and social issues",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positive impact: -Personalized learning -efficient grading and feedback",
          "themes": [
            "efficiency"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Intelligent tutoring system",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency",
          "engagement",
          "making"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Yes",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art is a form that uses technology to express ideas and feelings",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "One specific instance where technology significantly enhanced teaching and student engagement is the use of virtual reality (VR) in the classroom. By incorporating VR technology, teachers can provide students with immersive and interactive learning experiences that go beyond traditional textbooks and presentations.",
          "themes": [
            "skillLoss",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I would love to share an example of a media arts project that had a strong impact on students. One project that comes to mind is a collaborative video production assignment I facilitated with my students. The goal of the project was for students to work together to create a short film that incorporated various…",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI has the potential to revolutionize art education by offering personalized learning experiences, expanding access to resources, and fostering creativity, it is essential to approach its integration thoughtfully to mitigate potential negative consequences such as dependency on technology, standardization of art, and…",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "With the AI tool's assistance, students can experiment with diverse color harmonies, understand how different colors interact, and gain inspiration from established artists' works.",
          "themes": [
            "creativity",
            "access"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Charter",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Yes",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts refers to creative practices that use technology, digital tools, and various forms of media to produce artistic works.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "In video games and labs technology",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Photographic 3d dimensions",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It would empower students knowledge",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "No I haven't",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "AK",
      "stateName": "Alaska",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 50,
        "aiRelevance": 75,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My previous teaching and professional experiences have significantly shaped my current teaching practices. Early in my career, I worked in diverse classrooms where I encountered students with varying learning styles, cultural backgrounds, and needs. This taught me the importance of differentiated instruction and…",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as a creative discipline that combines traditional art forms with digital and technological tools to produce, express, and communicate ideas. It includes various forms of media, such as film, photography, animation, graphic design, virtual reality, and interactive media, often involving the…",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "During a science lesson on ecosystems, I used an online simulation tool to enhance student engagement and understanding. The simulation allowed students to create and manipulate virtual ecosystems, experimenting with different variables like predator-prey relationships, weather conditions, and plant growth.",
          "themes": [
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I implemented a media arts project called \"Telling Our Stories Through Digital Media,\" where students created short documentaries about issues or experiences important to them. The project involved using video editing software, cameras, and audio equipment to produce a professional-quality video. One group chose to…",
          "themes": [
            "creativity",
            "skillLoss",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI could revolutionize art education by making it more accessible and personalized. With AI, students can receive instant feedback on their work, helping them refine their skills more effectively. It can also introduce students to new creative possibilities, such as exploring generative art or experimenting with…",
          "themes": [
            "creativity",
            "skillLoss",
            "access",
            "engagement",
            "making"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "In a media arts class, I incorporated AI tools to help students create a digital storytelling project. Using ChatGPT, students input their story ideas, and the tool generated suggestions for plot structure, character development, and dialogue refinement. One group focused on creating a short film script about…",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": null,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 75.0,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "How the instructional material is pubin placed",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "It's a method by which we use tools to carry out media",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "How I carried out a real explanation",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Video camera",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It's reduces employment",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "It helps to making teaching easier",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Yes",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using an interactive online platform for group discussions allowed students to collaborate in real time, share resources, and engage more actively during lessons. This enhanced participation and made it easier for them to grasp complex concepts.",
          "themes": [
            "creativity",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I organized a digital storytelling project where students created short videos about their personal experiences with social issues. This not only enhanced their media production skills but also encouraged deep reflection and open dialogue about important topics, fostering empathy and critical thinking.",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI could transform art education by providing personalized learning experiences, offering tools for creative exploration, and automating repetitive tasks, which would give students more time for innovation. However, it might also lead to concerns about over-reliance on technology, potentially diminishing the value of…",
          "themes": [
            "skillLoss",
            "barriers"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I used AI tools in a project where students explored digital art creation. They used AI-driven platforms to generate initial designs based on their ideas, then refined them using traditional techniques. This blend of technology and hands-on work allowed students to experiment creatively and push the boundaries of…",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My previous teaching and professional experiences have greatly shaped my current approach to art education. Early on, I worked in a variety of settings, from community workshops to private tutoring, and each experience taught me the value of adapting my methods to suit diverse learning styles. In community-based…",
          "themes": [
            "creativity",
            "skillLoss",
            "access",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as the creative use of various digital technologies and platforms to produce, manipulate, and communicate artistic content. This can include anything from video, sound, and interactive design to animation, digital installations, and even virtual reality. Essentially, it's about using modern…",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "One instance where technology significantly enhanced my teaching was when I introduced interactive whiteboards in the classroom. I used them to display multimedia presentations, allowing students to interact directly with the content. For example, in a history lesson, we watched historical footage, then had students…",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "A memorable media arts project I implemented was a \"Digital Storytelling\" unit where students created short films using smartphones. They had to plan, shoot, and edit their own videos, incorporating elements like sound design and visual effects. The project had a powerful impact as students were able to express their…",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": ". AI could revolutionize art education in both positive and negative ways. On the positive side, AI could provide students with personalized learning experiences, guiding them through techniques at their own pace and offering instant feedback. For example, AI tools could analyze a student’s artwork and suggest ways…",
          "themes": [
            "skillLoss"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I used an AI tool in a lesson where students were learning to create digital illustrations. The tool helped students generate initial sketches based on keywords or themes they provided, which they could then use as a foundation to build on and refine. This saved time and allowed students to focus more on their…",
          "themes": [
            "efficiency",
            "access",
            "engagement",
            "barriers",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "DE",
      "stateName": "Delaware",
      "schoolType": "Private",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Greatly and most importantly frequently",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "It’s an artistic medium within teaching,which involves digital tools,software etc and creating visual,multimedia or interactive artwork",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "As an educator using interactive tools like online quizzes or educational apps can significantly boost student engagement. For example, incorporating platforms like Kahoot! for quizzes can make learning more fun and competitive, encouraging students to participate actively.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One impactful media art project is the \"Digital Storytelling\" initiative, where students create their own short films or animations using digital tools. This project encourages creativity and self-expression, allowing students to explore personal narratives or social issues through visual storytelling. By…",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI has the potential to change the future of art education in both positive and negative ways. On the positive side, AI can provide personalized learning experiences, helping students develop their skills at their own pace. Tools like AI-driven design software can assist in creating art, offering suggestions and…",
          "themes": [
            "creativity",
            "skillLoss",
            "barriers",
            "making"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "One specific project where AI tools have been effectively used is in \"AI-Assisted Art Creation.\" For example, platforms like DeepArt or Runway ML allow students to create artwork using AI algorithms that transform their images into different artistic styles. In a lesson focused on digital art, students can upload…",
          "themes": [
            "ethics",
            "access",
            "engagement"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It has influenced my current teaching practices positively",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media Arts encompasses various forms of creative expression that use electronic or digital media as a primary means of communication. It combines art, design, and technology to convey messages, tell stories, and engage audience Media Arts encourages students to think creatively, develop technical skills, and explore…",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "MA",
      "stateName": "Massachusetts",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Curriculum design",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art is a dynamic and interdisciplinary field that combined art and technology",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Interactive simulation",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Collaboration tools",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Intelligent tutoring system",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "AI generated analysis",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Pedagogical approach",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Is dynamic interdisciplinary art technology",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Tablet or laptop",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Natural language processing",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Access to diverse art resources",
          "themes": [
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Group discussion",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "MD",
      "stateName": "Maryland",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My background in media arts has allowed me to integrate creative technology into my lessons, making learning more engaging and interactive. Additionally, my experience teaching at different grade levels has helped me tailor my instruction.",
          "themes": [
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts are creative works that use technology, like videos, digital images, sound, and interactive media, to tell stories or share ideas.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I once used a virtual reality app to take my students on a virtual tour of ancient Rome. It helped them visualize historical details, sparking curiosity and deeper discussions. Their engagement and recall of the topic improved significantly.",
          "themes": [
            "creativity",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I assigned students to create a short video on a social issue they cared about. They used storytelling, sound design, and visuals to express their ideas. It not only improved their technical skills but also deepened their understanding of the issues they explored.",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI could make art education more accessible by offering personalized learning and creative tools. However, it might also reduce the emphasis on traditional skills and critical thinking if not used thoughtfully",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I used an AI-powered image editing tool to teach students about color theory and composition. The tool allowed them to experiment with designs in real time, enhancing their understanding of artistic principles through hands-on practice",
          "themes": [
            "skillLoss",
            "barriers",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "IL",
      "stateName": "Illinois",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My previous teaching experiences have shaped my student-centered approach, emphasizing technology integration and research-informed strategies to enhance student engagement and learning outcomes. Collaborative educational experiences have taught me the value of community building and industry partnerships, which I…",
          "themes": [
            "access",
            "engagement",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "I would define media arts as a dynamic and interdisciplinary field that combines artistic creativity with technical skills to communicate ideas, tell stories, and express emotions through various forms of media.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "In a media arts class, I used a virtual reality (VR) tool to transport students to the Renaissance era, allowing them to explore and interact with iconic artworks in 3D. This immersive experience significantly enhanced student engagement and understanding of art history.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One project that had a strong impact was a social justice documentary series, where students researched, scripted, and produced short films on local issues, such as environmental conservation, mental health, and diversity. The project fostered critical thinking, empathy, and storytelling skills, and the final films…",
          "themes": [
            "skillLoss",
            "training"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI can revolutionize art education by providing personalized learning, intelligent feedback, and access to vast art repositories. However, it also raises concerns about homogenization of art, job displacement, and dependence on technology. Ultimately, striking a balance between technological innovation and human…",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "In a media arts class, I used AI-powered video editing tools to help students create short documentaries, streamlining tasks like editing sequences and captioning. The AI assistance allowed students to focus on creative storytelling, resulting in engaging and well-crafted documentaries. This project showcased the…",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Media arts are simply engaging and innovative",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "engagement"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It has given me enough experience to shape my teaching better.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "To me, media is the use of new technology to do art.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Last year, I used an interactive whiteboard combined with an educational app during a lesson on story sequencing. The app allowed students to drag and drop images from a story in the correct order while the whiteboard displayed the activity for the entire class. Students were excited to take turns participating, and…",
          "themes": [
            "creativity",
            "efficiency",
            "skillLoss",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I once guided my students through creating a class stop-motion animation. We used a simple app to capture frames as students arranged paper cutouts to depict a story they had written together. Each student contributed by designing characters, creating backgrounds, or directing scenes. The project not only boosted…",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI has the potential to revolutionize art education positively by providing personalized learning experiences, instant feedback, and access to tools that simplify complex artistic techniques. For instance, AI-driven programs can help students experiment with styles, suggest improvements, or even simulate various art…",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "In one lesson, I used an AI art generator to help students visualize how a single concept, like “happiness,” could be represented in different styles. We generated several images in diverse art forms—impressionism, surrealism, and modern digital art. The students then analyzed and critiqued the images, sparking a…",
          "themes": [
            "creativity",
            "access",
            "barriers"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "\"My previous experience working in a high-needs school taught me the importance of adapting my teaching practices to meet the diverse needs of my students. For instance, while teaching in an urban district with English language learners, I developed strategies for incorporating visual aids and collaborative…",
          "themes": [
            "creativity",
            "access",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as the creative practice of designing, producing, and sharing content through various digital and traditional media platforms. It encompasses a wide range of art forms, including film, photography, graphic design, animation, interactive media, and emerging technologies like virtual reality.…",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "\"In one of my classes, I introduced an interactive project using augmented reality (AR) to bring historical events to life. Students used an AR app to scan images in their history textbooks, which then displayed 3D models, videos, and narrated stories about the events. For example, when studying World War II…",
          "themes": [
            "skillLoss",
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Project Title: \"My Voice, My Story\" Objective: Encourage students to use digital storytelling to share personal or community narratives while honing media arts skills. Description: I implemented a project where students created 3-5 minute multimedia documentaries about a topic they were passionate about, such as…",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Personalized Learning: AI can tailor art education to individual learning styles and paces. For instance, an AI tutor could provide real-time feedback on a student's technique or suggest resources to develop specific skills.",
          "themes": [
            "skillLoss",
            "barriers"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Skill Development: They learned how to use AI tools while still applying critical thinking, creative direction, and storytelling skills.",
          "themes": [
            "skillLoss"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It improved",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts refers to a broad field that encompasses the creation, study, and distribution of various forms of media, including visual arts, audio, video, and digital content. It combines traditional artistic practices with modern technologies to produce works that can be experienced across different platforms, such…",
          "themes": [
            "skillLoss",
            "access",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "It helped in making deep research",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "ChatAI",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positively",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "[PERSON]'s always useful",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "By combining my professional and teaching experiences, I strive to create a dynamic and inclusive classroom environment. My goal is to inspire students to connect theory with practice and to leave my classroom with confidence in their abilities.",
          "themes": [
            "creativity",
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts offer a unique space where creativity, technology, and storytelling converge. As a teacher in this field, [PERSON] belief that education should empower students to think critically, experiment boldly, and produce work that reflects their individuality while engaging with broader societal conversations.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "In one of my courses on interactive media design, I introduced augmented reality (AR) technology as a tool to deepen student engagement and creativity. The project involved students designing interactive AR experiences using platforms like Spark AR or Unity. The goal was to merge storytelling with cutting-edge…",
          "themes": [
            "creativity",
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One of the most impactful projects I implemented was called “Stories of Sustainability”, which combined creative media production with real-world environmental issues. The goal was to help students explore how media arts could inspire social change while giving them hands-on experience with storytelling and emerging…",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI tools like generative art platforms can help students push creative boundaries by enabling them to experiment with styles, techniques, and mediums they might not have otherwise explored. AI-powered software can also provide personalized feedback on their work, helping them improve in specific areas.",
          "themes": [
            "barriers"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "In one of my media arts courses, I introduced an AI-driven project called \"Reimagining the Classics,\" where students used generative AI tools like DALL·E or RunwayML to reinterpret iconic works of art. The goal was to explore how AI could both expand and challenge traditional artistic methods, while prompting…",
          "themes": [
            "skillLoss",
            "training"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 50,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 75.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Positively",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Efficient enough",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "efficiency"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 0,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Throughout my career, I've had various experiences that have significantly impacted my current teaching practices. Previous Teaching Experience: Student centered approach Educational Experience: Collaboration and teamwork Other Professional Experiences: Communication skills. These experiences have collectively shaped…",
          "themes": [
            "skillLoss",
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media Art involves integrating digital tools, software, apps, robotics, electronics, 3D printing, coding, AR/VR, digital photography, video editing, digital game-making, and beyond to facilitate and enhance students' creative practices, such as creating visual, multimedia, or interactive artworks",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "During a unit on environmental science, I incorporated virtual reality technology to enhance student engagement and understanding. Technology Used: VR headsets and Interactive Software.",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I implemented a media arts project where students created a documentary series showcasing the stories and experiences of community members. impact on students: Improved Technical Skills and Fostered Community Engagement.",
          "themes": [
            "skillLoss",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positive Changes: Personalized Learning and Enhanced Collaboration Negative Changes: Bias and Lack of Diversity, Job Displacement.",
          "themes": [
            "ethics",
            "barriers"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Students analyzed artworks using AI-generated observations and insights. AI Impact: Enhanced Critical Thinking and Increased Engagement.",
          "themes": [
            "engagement"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "NC",
      "stateName": "North Carolina",
      "schoolType": "Charter",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 25,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 25,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 25.0,
        "digitalReadiness": 50.0,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Helped me create a better quality arts program.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using technology to create rubrics that help students self-assess as well as summative assessments for projects.",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "N/a",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It could help engage students who do not feel confident in traditional arts education. It could also hinder the students creative abilities because they are so used to looking up ideas rather than generating ideas on their own.",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "It is most helpful for assessment rubrics. The rubric allows to students to break down the concepts and techniques of an assignment to understand the goals in more specific ways they may not consider if just looking at the end product.",
          "themes": [
            "creativity",
            "efficiency"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "engagement",
          "skillLoss"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Previous experiences have helped me develop a student-centered approach, integrate technology effectively, and create engaging lesson plans.",
          "themes": [
            "efficiency",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts encompass various forms of creative expression that utilize digital technologies, such as video, audio, graphics, and interactive media, to communicate ideas, tell stories, and evoke emotions.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I used online platforms for peer review and feedback in a digital photography unit, promoting engagement, critical thinking, and improved technical skills.",
          "themes": [
            "skillLoss",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "i assigned a multimedia storytelling project, where students created interactive narratives using digital tools. this project fostered creativity, collaboration, and technical skills, while allowing students to express themselves and share their stories.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI can enhance art education with personalized feedback and new creative possibilities, but also raises concerns about authorship and originality.",
          "themes": [
            "creativity",
            "ethics"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "In a graphic design unit, I used an AI-powered design tool to help students generate initial ideas and explore different visual possibilities.",
          "themes": [
            "creativity",
            "access",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "NM",
      "stateName": "New Mexico",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 16.7,
        "digitalReadiness": 44.3,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "techEnhanced": {
          "text": "[PERSON] a maker space and we have been using a glowforge and 3-D printers",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "We do not have the tools to do a classwide media arts project",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It steals other artists work to train its system which is extremely unethical",
          "themes": [],
          "stance": "negative"
        },
        "aiUseful": {
          "text": "I sometimes use Chat GPT to write a lesson plan or PDP because it gives me time to do things that are student focused instead of paperwork",
          "themes": [
            "efficiency",
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "efficiency"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "VT",
      "stateName": "Vermont",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 16.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12",
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I teach Digital Photography for college credit as well as Digital I, II, and III for high school credit. I have taken classes through Adobe and have certifications through Adobe.",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is the study of how we communicate through a variety of media, including film, video, photography, audio, and digital arts. It is a multidisciplinary field that uses technology to create art and tell stories.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Students withing my digital classes enhancing their photography and film skills.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Student used Blender to create characters and a digital world.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Plagerism and a lack of brainstorming and reliance on AI ideas.",
          "themes": [
            "creativity",
            "barriers"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Nope",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "IL",
      "stateName": "Illinois",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": null,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 100.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 58.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My expereince with media arts is based on what I have learned from online webinairs, professional tutorials, personal interest and experiencing and speaking with industry professionals.",
          "themes": [
            "engagement",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "I define media arts as any time the bulk of the project is created using some tiype of technology that [PERSON]. The programs are tools that a multimedia artist uses similiar to that of a traditioal artists.",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "When I was teaching concept art and character design - students use ai to design their space and continued to iterate on their design until it matched their ideas, then they used that images as a resource for drawing.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Creating a narrative photography using perpexity or chat gpt to support the story delopment.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "In so many ways. I think that so much of the pos/negative energy stems from the beliefs and comfort level of the teacher",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "We used ai as a feedback tool for drawings, we put photo of the artwork in gemeni, then asked for specific feedback based on the standards, It was great opportunity to learn how to prompt and use the tools in a traditional classroom.",
          "themes": [
            "skillLoss"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 0,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 41.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I've attended different PD experiences at state and national conferences that have influenced my teaching practices.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "I had originally thought Media Arts focused on creating artwork using technology more closely related to a laptop or computer. I had not thought of digital photography as a media arts form.",
          "themes": [
            "ethics"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I used Adobe Firefly with my freshmen drawing students as a means to create a collage to use with their drawn self portraits.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I teach digital photography and each unit focuses on specific concepts - the use of digital manipulation and illustration in combination with photography has resulted in more expressive artworks - our social justice unit was one instance that stands out to me.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think art educators need to be sure and address the ethical issues related to using AI in art making. If we emphasize the importance of the inputs coming from the student then it can be a positive tool to use in the creative process; however, if AI is used as a find and take tool it will deteriorate the integrity…",
          "themes": [
            "ethics"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I have used Chat GPT with upper level students to organize artist statements. When I do this I have student record all of their inputs and the outputs given by the AI. I then have them reflect on the process and ask them to evaluate the efficiency and accuracy of the AI generated statements vs their personally…",
          "themes": [
            "engagement"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "ethics",
          "making"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "SC",
      "stateName": "South Carolina",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 61.0,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have always tried to incorporate technology into my art lessons. As, technology changes over the years so has my ways of incorporating it into my teaching practices.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "The same... Using technology as an artistic medium within your teaching.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "My students love creating animations on their iPads. This generation is very into using technology and feel more comfortable on an iPad.",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I teach about digital art, animations, creating google slides, and a number of other projects that have had a huge impact on my students.",
          "themes": [
            "efficiency",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I feel that it will help in a variety of ways in education. It will be beneficial to students and teachers.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "efficiency",
          "making",
          "training"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 0.0,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "techEnhanced": {
          "text": "Google Classroom has been incredibly helpful for managing classroom assignments and grading",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think AI is a plague and should not be used in the classroom at all. It is teaching students to be lazy, to steal ideas that are not their own, and it is robbing them of the opportunity to learn and grow as artists and thinkers. It is also destroying the environment and robbing our art students of future career…",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "HI",
      "stateName": "Hawaii",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 100,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 0,
        "supportReadiness": 0,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 41.7,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "I have not faced any challenges",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have worked as an art educator at a museum, doing cross curricular projects in public schools.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "It is fun for students to generate prompts and have MidJourney create art.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Collaborative art using MidJourney and student prompts.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I don't think it will change that much, but students need to be aware that what they see might be made by a computer, not a person.",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Collaborative prompts. Making mythical creatures that combine two or more animals.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "NC",
      "stateName": "North Carolina",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 50,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 41.7,
        "digitalReadiness": 36.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": []
      },
      "openResponses": {},
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "NH",
      "stateName": "New Hampshire",
      "schoolType": "Private",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 0,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] curriculum and playing with new technologies to streamline my teaching or offer new approaches for my students to explore the arts.",
          "themes": [],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 75,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 91.7,
        "digitalReadiness": 77.7,
        "mediaArtsReadiness": 58.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I teach and experiment... I adjust and evolve... from training and trial and error.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "The use of hands-on and digital tools to create meaningful and creative art.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using Photoshop to create anatomical templates for students to shade and learn using a perceived light-source",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One of the tenets of AP art is to experiment and alter images... do a variety of riffs on a similar theme... digital media makes this so much more doable without destroying the integrity of the original piece.",
          "themes": [
            "ethics"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI used as a source to inspire or explore is so positive as a finished product it becomes a crutch and detaches the artist.",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "[PERSON] integrate AI... I have used it to show how it can be used as a tool to create a catalogue of pose sources, compostion ideas and background possiblities for the creation of traditional art.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 25,
        "digitalConfidence": 50,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 0,
        "aiRelevance": 25,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 8.3,
        "digitalReadiness": 47.3,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have always worked with traditional tools and I don't like dealing with technology",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I only use technology for sharing visuals with students and posting material online so they can access instructions, samples and rubrics",
          "themes": [
            "efficiency",
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "no",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI uses water and energy to make students lazy and is a threat to critical thinking",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "We use AI constantly. I still use search engines to find examples to use in my presentations. More and more [PERSON] and books to find answers and create lessons to avoid the environmental stress that is caused by our increasing dependence on technology. I ask my students to put their screens away and to practice…",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "efficiency",
          "skillLoss"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "KY",
      "stateName": "Kentucky",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 66.7,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "We take what we learn through class, experience, and mistakes, and apply it to our current practices.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Using any sort of media for expression.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "AI helps with lesson planning.",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I have not used a specific project.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It will help with access but muddy the waters of authenticity.",
          "themes": [
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "We use them to create ppts. I have used it to create bellringers, brainstorm new ideas, and generate HOT questions.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "efficiency"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 0,
        "digitalConfidence": 25,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 25,
        "aiRelevance": 25,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 16.7,
        "digitalReadiness": 30.7,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "techEnhanced": {
          "text": "not at this time.",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "not at this time.",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "it could change it significantly.",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "none at this time.",
          "themes": [
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "NH",
      "stateName": "New Hampshire",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": 50,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 0.0,
        "digitalReadiness": 61.0,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I work with my high school students on how they can apply their experience in the art classroom to the real world. Trying to get them to make connections to using photography in a variety of workplace settings, thinking about how understanding principles of design can help them to create strong presentations and how…",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Creating work through the use of a digital aid such as a camera, tablet or computer.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "The students have a great interest in learning photography and how to edit in photoshop which leads to a great level of interest in the course. Student engagement is always high with this course and it has a higher rate of projects being turned in on time and completed.",
          "themes": [
            "engagement",
            "training",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "A popular project is the In The Style Of Project. Students research a photographer and create a photography to emulate that artists work. The students like being able to pick their own artist and learn about them and their work. I have also noticed it influences the direction that students begin to work after the…",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I lean on the more negative side of AI. In my experience students are using it more so to cheat or skip out on more research based work as well as using it to help them to type their work or essays. I haven't seen too much AI in the work that my students have made through photoshop but I also do not teach them how to…",
          "themes": [
            "training",
            "making"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I do not use AI",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "engagement",
          "making",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum",
          "Lack of interest from students"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My previous experiences have significantly shaped my current teaching practices by helping me develop strategies to create an engaging, inclusive, and student-centered classroom. For example, past teaching roles taught me the importance of building relationships with students and understanding their unique needs…",
          "themes": [
            "skillLoss",
            "access",
            "engagement",
            "training"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Absolutely! One specific instance where technology significantly enhanced my teaching and student engagement was during a unit on persuasive writing. I used Flipgrid, a video discussion platform, to create an interactive assignment where students recorded short video pitches presenting their arguments on a topic of…",
          "themes": [
            "skillLoss",
            "access",
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One impactful media arts project I implemented involved students creating multimedia autobiographies inspired by the \"Where I’m From\" poetry exercise. Students wrote poems exploring their identities and paired them with photographs they captured using DSLR cameras. They learned photography techniques, such as framing…",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI has the potential to greatly impact art education, bringing both benefits and challenges. On the positive side, AI can act as a creative partner, helping students explore new techniques, generate ideas, and experiment with styles they might not otherwise encounter. Tools like AI-driven art generators and virtual…",
          "themes": [
            "creativity",
            "efficiency",
            "ethics",
            "skillLoss",
            "access",
            "engagement",
            "barriers"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "One specific project where I used AI tools effectively was during a creative writing lesson focused on storytelling. I introduced students to an AI writing assistant, such as ChatGPT, to help them brainstorm ideas and develop story outlines. Students began by inputting prompts or themes they were interested in, and…",
          "themes": [
            "creativity",
            "ethics",
            "skillLoss",
            "access",
            "engagement",
            "training",
            "barriers",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "NM",
      "stateName": "New Mexico",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Learning is a continuous process, everything that I learned from the past is the start of new adaptive learning in the present times and even in the future. It brings me strong knowledge and hands-on productive learning experiences that I could impart to my students. Those failures I’ve experienced were the gateway…",
          "themes": [
            "skillLoss",
            "access",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media Arts is a branch of Art Education that deals with computers. Lessons might include, computer programming, designing, coding and creating through the use of assistive technologies.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "We are in the 21st century and modern technology era. Students are into computers and other digital tools. Using technology in my class boost students interest most especially when I have a chance to team teach with the regular education teacher.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "[LINK] sprite Animation and Lego robotics activities.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Negatively: plagiarism and originality. Positively: enhances more accurate artwork and masterpieces.",
          "themes": [
            "ethics"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "Maybe in designing and creating a meaningful description of the project.",
          "themes": [
            "making"
          ],
          "stance": "uncertain"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "WA",
      "stateName": "Washington",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 0,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 0,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 8.3,
        "digitalReadiness": 33.3,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "[PERSON] a general ed teacher with a K-12 reading specialist endorsement. This background has greatly influenced my ability to integrate all core subjects into art.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Use of technology to create art",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Consistent use of the app Artsonia. When students consistently upload photos of each project they are often shocked to see their growth from 3rd to 5th grade.",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "5th grade used modeling clay to build characters for a stop motion video in small groups then shared with the class.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "At this point my thoughts are negative and/or very hesitant to use ai in art. The increase of screen time and gaming continues to negatively influence fine motor development, hand writing",
          "themes": [
            "skillLoss",
            "barriers"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "N/a",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "During my specialist degree, I conducted research on how smartphones have become powerful artistic tools. I explored how the act of taking photos with smartphones, combined with the use of photo editing apps, can be considered a form of artistic expression. Based on this research, I believe it's crucial for…",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Teaching student how to use technology as a tool to create art and explaining careers that use these technologies to create original work.",
          "themes": [
            "ethics"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Integrating technology as an art making tool has taught me I do not have to be an expert to teach it. I can figure it out along with my students. In fact, some of the programs we use are because I saw a student using it during free time and asked them about it. Students are digital natives and they love learning…",
          "themes": [
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I incorporate a project inspired by artist Cindy Sherman, where she utilizes makeup, costumes, and a green screen to dramatically transform her appearance and create striking self-portraits. Students have the opportunity to emulate this process. They choose a costume, apply makeup (if desired), and utilize an iPad…",
          "themes": [
            "creativity"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "In my role as a university professor, I frequently observe AI being misused rather than utilized as a tool for enhancing learning. A primary concern is the alarming frequency with which students employ AI to generate essays, effectively circumventing the crucial process of synthesizing information from course…",
          "themes": [
            "engagement",
            "training"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "I use AI to help me compose emails and written correspondence to parents, students, and colleagues.",
          "themes": [
            "engagement"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "engagement",
          "ethics",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Private",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 25.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I am a lifelong learner and am self taught at most subjects I currently teach. Including digital photography, yearbook and Graphic Design",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "software and digital tools used in the modern age.",
          "themes": [
            "barriers"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Many students are good at creating a pleasing book cover in 5th grade using canva or adobe express, but they don't have the ability to draw and make it look as professional.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "In 6th grade they used ipads to take a foreshoretened self portrait that we then removed the background from. We make the image very light and grey and printed it on art paper for them to paint, sew and collage on top of.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Not really sure. You still have to come up with the prompts and ideas to enter into AI and often it is still not going to look like what you want, so you might as well do it yourself. But it can also help you figure out how to put things together in a way you might not have thought about before.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I used chatgpt to come up with several versions of a semster long digital photography course before I started teaching it for the first time. I was able to take the pieces and parts of each version to create something I wanted. That saved me hours of time.",
          "themes": [
            "training",
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "making",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It made teaching more easier and better to understand",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "It is an artistic practice that uses different forms of media to create innovative and often experimental works.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "There's an increase in students engagement.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Project \"My Story\": Students create a short narrative about their identity and culture. It helps students reflect on their experiences and passion to develop concept.",
          "themes": [
            "creativity",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI can help tailor art education to individual students' needs, abilities and learning styles. Over reliance on AI generated art might lead to loss of unique,human perspectives and styles.",
          "themes": [
            "skillLoss"
          ],
          "stance": "negative"
        },
        "aiUseful": {
          "text": "AI powered poetry Generation",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "NY",
      "stateName": "New York",
      "schoolType": "Public",
      "teachingBand": "Other",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I speared headed the use of iPads in the elementary classroom years ago, but have pulled back when the technology was less supported and caused more issues than necessary. So my technology use is based heavily on the consistencey of the devices and software available as a result.",
          "themes": [
            "access",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Because of the age students I work with, I also include digital citizenship, shortcomings of AI image creation, etc.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Students are more receptive to videos of books being read than to having me read about an artist or topic. I use technology to set a calm tone in the room. Cute online timers help me transition preschoolers at the end of class.",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Students worked with a fiber artist, interacted with real sheep, made wet wool felted pieces, and combined videos and writing about the experience in an app to create a fun cumlinating presentation about the unit.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Students will feel engaged and successful using AI, but the prompts require more descriptive language development to generate images.",
          "themes": [
            "engagement"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I used it as a culminating activity following a unit on Georgia O'Keefe. Students wrote prompts based on their knowledge of her mediums, subjects, colors, and techniques. (grade 2)",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "engagement",
          "making"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "NE",
      "stateName": "Nebraska",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 0,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 25,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My undergrad is in computer graphic design.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Using technology based resources to enhance lessons. Keeping up with the development of the art to be sure to kids active and engaged.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I record my lessons and upload them to my google drive. This has added another teacher to my classroom by allowing the kids to access my direct teaching while I can work one on one with kids that need help. This also helps with pacing.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "The kids have shown so much engagement in creating digital work with canva and sketches. They have taken their skills from the art room back to the classroom to enhance their lessons.",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "It is important for us as teachers to embrace upcoming technology and use it in a positive way by showing them how they can use it to take their work to the next level.",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "na",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "FL",
      "stateName": "Florida",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Yes, I was running my dads business for a while",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts refers to a broad field of creative practices that involve the use of digital, electronic, or traditional media technologies to create, communicate, or express ideas. It combines art, technology, and storytelling, often pushing the boundaries of traditional art forms.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I used Desmos to plot solutions of differential equations in real-time. For instance, when discussing a model (, they input the equations for the susceptible, infected, and recovered populations. Students can see how changing parameters (e.g., transmission rate) dynamically alters the curves.",
          "themes": [
            "access",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I helped my students understand the impact of tuberculosis transmission using interactive, visual storytelling through digital media.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI-powered tools like DALL·E, DeepArt, and Runway ML can help students visualize ideas quickly, experiment with styles, or generate new concepts.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "I taught my students how to use AI tools to visualize models creatively, combining STEM and art in an engaging way.",
          "themes": [
            "engagement"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "engagement",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "It has made my current teaching practice easier, and I have gotten more acquainted with learning facilities",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts refer to an artistic practices that engages forms of media such as films, video, photography digital arts and Interactive technology to create and express ideas",
          "themes": [
            "creativity",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I used technology to create a virtual 30 minutes trip for my students",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Corel draw",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Artificial intelligence is a great media innovation and it enhance learning. Especially for students with special needs.",
          "themes": [],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I used AI to generate an Image of an animal that wasn't common to my students",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "engagement",
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "SC",
      "stateName": "South Carolina",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 25,
        "standardsFamiliarity": 0,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 58.3,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 8.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {},
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "NM",
      "stateName": "New Mexico",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 0,
        "aiComfort": 75,
        "aiConcern": 0,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 50.0,
        "digitalReadiness": 61.0,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My background is photography",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Differentiation strategies",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Someday there will be schools with only AI teachers. The wealthy will have human teachers.",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Creating warm up prompts, objectives. The filler for lessons.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 83.3,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "No",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts would be art created using programs or materials that are digitally connected. Things such as video, Procreate, AR, AI, etc. Programs not typically used for traditional art making.",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I teach co-seated classes, so creating videos, interactive media, and online assessments has helped guide students when I cannot work with a certain group. It provides resources for them to check back to as well. I communicate all grades, track all projects, and provide all resources digitally. It allows me to grade…",
          "themes": [
            "efficiency",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "I teach a digital art class that only works with Procreate. We have created character designs, AR filters, digital paintings, sticker/design lessons and more. It has taught students that anyone can utilize digital media arts and create strong work. I have seen kids rise in confidence and kids who were unsure about…",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it could go either way. If used incorrectly, we may begin to question creativity, originality and authorship. However, if used as a tool, it can assist students in their planning, creative process, and project development.",
          "themes": [
            "ethics"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I use it for student artist statements, project design, and creating reference images for students. Just recently, we talked about utilizing AI to help develop references and research surrealism art. Students were able to find pictures that helped them piece together their reference images. These things they cannot…",
          "themes": [
            "creativity",
            "efficiency",
            "training",
            "making"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "efficiency",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "AL",
      "stateName": "Alabama",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 25,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 58.3,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 75.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5",
          "6-8"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Music programming, Stem facilitation",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Arts with technology infusion",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "It helped during Covid and students accessing the class when at home.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Yes. Recyclable art and climate change research. They had to make a PowerPoint and discuss what they discovered using their PowerPoint.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Making things easier and saving time.",
          "themes": [
            "barriers"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Lesson Planning",
          "themes": [
            "efficiency"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "efficiency",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "Multi-level",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 25,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 50.0,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "3-5",
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Help me deal with certain circumstances in a different light",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Creative writing",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Graphics",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Negatively, will take away the zeal for creativity from the students since it's easily done by AI",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Picturing images for easy understanding",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 91.7,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I have a lot of training and educational leadership. This has very much influenced my teaching styles and strategy.",
          "themes": [
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Any art that is created with the use of technology",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Since I teach a class on digital arts. It impacts it every day. I also use it in my everyday classroom as we create portfolios and are a Google school.",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Again, with me, teaching a digital arts class I would say that the personalization of technology has very much impacted my students.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "On a positive note, it could help students to realize their ideas if they could be able to write them down. On a negative note it will take away a lot of creativity and thinking skills.",
          "themes": [
            "creativity",
            "skillLoss"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "I do a lesson with a Lowell Milken center for unsung heroes. So the students use creative writing prompts to generate ideas for artwork for the heroes.",
          "themes": [
            "creativity"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 83.3,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "I would define media arts as technology-infused art practices that couple traditional artistic beliefs and values with innovative and creative processes.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "During virtual learning, I was able to adapt a community quilt project to a google slide assignment, giving every student a drag and drop version of what they would have done in class. The digital collage was then used as my google classroom banner when students logged in for instruction. I was able to create a…",
          "themes": [
            "efficiency",
            "skillLoss",
            "access",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Students create a website to posterize a favorite image of themselves to 3-5 values. We then use another website to enlarge their image for a giant, drastic self-portrait using a variety of color schemes. The finished product is painted and mixed media elements are collage on their work to add personal meaning.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "The use of AI in art education has the potential to offer new tools and opportunities for students and teachers. I think it can revamp a favorite art lesson, add perspective, give access to a student who cannot produce artwork on their own, expand possibilities, be used to generate ideas, and improve connections.…",
          "themes": [
            "creativity",
            "ethics",
            "skillLoss",
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "My students create a passion project at the end of the year where they can combine a learned technique with a theme that is most important to them at this moment in time. Using AI, students can create a list of potential art projects they can refine or select to make. AI is not the final product of this project, but…",
          "themes": [
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "MD",
      "stateName": "Maryland",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 25,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 25,
        "aiRelevance": 25,
        "aiComfort": 25,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 25.0,
        "digitalReadiness": 36.0,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality",
          "Other (please specify)"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "techEnhanced": {
          "text": "During covid I made a lot of helpful videos. I enjoyed it very much, but, it requires a lot of time",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Kids won't know how to draw themselves and may lack confidence in themselves and become reliant on the tech to communicate their feelings and perspectives. Taking credit for things they didn't really do=false confidence. Everything kids need or want to know about art is online so real teachers or expensive art…",
          "themes": [
            "skillLoss",
            "barriers"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "DE",
      "stateName": "Delaware",
      "schoolType": "Public",
      "teachingBand": "Other",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": null,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 83.3,
        "digitalReadiness": 87.5,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "Other (please specify)"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies",
          "media arts",
          "or AI",
          "Support from school leadership or administrators",
          "Other (please specify)"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "This is an odd question and I wonder if words may have been let out. Every experience I have everyday influences my teaching practices because teaching is like breathing it's a part of life. Everyone teaches, even small children, everyday. It is part of the human condition and its how we live and grow as a society.…",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "After one advanced painting class, students did not clean up the room like they should have. As a \"punishment,\" I had them create tutorial videos of how to clean up the tables, paint trays, sinks, brushes, etc. properly on flipgrid. This \"punishment\" ended up being a great lesson and very engaging for all. It was fun…",
          "themes": [
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "none, [PERSON] to teach a media arts lesson due to my school also having CTE visual communications classes as well.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think it will push arts education to be more ideation/creativity focused with is good because that is really where the money is. Its not about creating this amazing finished complete painting. It's really about the idea, the meaning, the process that got that artist to that painting. AI can make that one painting.…",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Not yet, again that are blocked for students, but [PERSON] them with teachers on how to create lessons and push the imagination and creativity of the teacher. That is where it starts.",
          "themes": [
            "creativity",
            "barriers"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "engagement",
          "making",
          "training"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "MD",
      "stateName": "Maryland",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "0-3 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Influenced my capabilities to doing even more better",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art is a form of artistic expression that involves the use of digital technologies and media as primary tools for creating, presenting, and experiencing artwork.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Video Conferencing Tools: Platforms like Zoom, Microsoft Teams, and Google Meet enabled teachers and students to interact in real time, simulating the traditional classroom environment. These tools allowed for live lectures, group discussions, and real-time feedback.",
          "themes": [
            "skillLoss",
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "StoryCorps” initiative, a project that combines audio and visual media to foster understanding, empathy, and storytelling. While StoryCorps is primarily an oral history project, it incorporates a wide range of media art forms, including audio recording, animation, and video production, all of which are elements…",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Personalized Learning: AI can create individualized learning experiences, tailoring content to each student’s learning pace and style. For example, AI-powered tools can offer real-time feedback, suggest resources, and help identify areas where students need improvement, enhancing educational outcomes.",
          "themes": [
            "access",
            "barriers"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "Canva’s AI-powered tools suggest design templates, color palettes, and font combinations based on the project’s content, making design accessible to non-designers and helping users improve visual aesthetics effortlessly.",
          "themes": [
            "access",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CT",
      "stateName": "Connecticut",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Massively",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art refers to artworks created using digital or electronic media, including video, audio, computer graphics, and interactive technology. It blends traditional art forms with new technologies, allowing artists to explore innovative ways to communicate ideas and emotions.",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Certainly! One example is when I used interactive simulations in a lesson about physics concepts, like the laws of motion. Instead of just explaining the theory, I incorporated a simulation where students could manipulate variables like speed, force, and friction, seeing real-time changes in the movement of objects.",
          "themes": [
            "creativity",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One impactful media arts project I implemented was a digital storytelling assignment where students combined video, sound, and animation to create short films based on a personal or social issue that mattered to them. They were tasked with scripting, filming, and editing their stories, using software like Adobe…",
          "themes": [
            "barriers",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positively, AI could enhance the learning experience by offering personalized feedback and tailored learning paths. For example, AI could analyze a student’s artwork and provide constructive critiques on techniques, color use, or composition, helping students improve more efficiently. On the negative side, there’s…",
          "themes": [
            "efficiency",
            "ethics",
            "skillLoss"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "we wanted to explore the concept of generative art—art created using algorithms. I used AI-powered tools like DALL-E or DeepArt to show students how AI can generate unique visual pieces based on specific prompts or images.",
          "themes": [
            "creativity"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "barriers",
          "creativity",
          "efficiency",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 75.0,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can help students with limited technical skills create art"
        ],
        "supportChallenges": [
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Integrating digital tools to enhance practices and other interactive artworks",
          "themes": [],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "OK",
      "stateName": "Oklahoma",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 100,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 100.0,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 100.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "3-5"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Limited support from school leadership or IT staff",
          "Difficulty finding time to integrate media arts or AI into the curriculum,I have not sought any support because I do not integrate technology or teach media arts"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "Past experience teaching students at various levels helps refine approaches to classroom management, instructional design, and communication. For example, adapting lessons to meet diverse learning styles builds flexibility and empathy.",
          "themes": [
            "access",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Artworks that depends on technological components to function",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using interactive quizzes with Kahoot increased student engagement and participation.",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "A digital storytelling project using Adobe Spark allowed students to creatively express personal stories",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI could democratize access to art tools but might risk over-reliance on automated creativity.",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "ChatGPT was used to assist students in brainstorming creative ideas for an animation project.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "CT",
      "stateName": "Connecticut",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 89.0,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Access to technical support from IT staff,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I worked as a graphic designer for years before teaching and I have a BFA in Design. Most of my curriculum is rooted in professional practices and concepts.",
          "themes": [
            "creativity",
            "making"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "creativity",
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "MA",
      "stateName": "Massachusetts",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 100,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 50.0,
        "digitalReadiness": 80.7,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It might lead to over-reliance on technology"
        ],
        "supportChallenges": [
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I use document cameras and clear touch tv because in covid we learned a lot about technology. I used to make slide shows for companies before I was a teacher",
          "themes": [
            "efficiency"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "creating slideshows and using canva to create posters for art shows. You tube access for art lessons and read aloud books.",
          "themes": [
            "access",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "i haven't thought about it. BUT when i try and write and artist statement for my own work I can see AI helping with that.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "efficiency",
          "making"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "OK",
      "stateName": "Oklahoma",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Other",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 25,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 75,
        "aiRelevance": 0,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 50.0,
        "digitalReadiness": 47.3,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "mediaDefinition": {
          "text": "Media arts is study and creation of art that uses technology for expression. It includes the use of film, video, photography, audio, and digital arts.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        }
      },
      "themeSummary": {
        "allThemes": [
          "making"
        ],
        "codedResponseCount": 1
      }
    },
    {
      "state": "MO",
      "stateName": "Missouri",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "20 + years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 100,
        "standardsFamiliarity": 50,
        "aiOpenness": 50,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 66.7,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 50.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software)",
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "No",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts are a type of art form that use various digital avenues/platforms for design and creation with the incorporation of traditional art forms.",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I use technology everyday as I am a Digital Arts teacher, but it has enhanced in my presentations, assessments, and student engagement. I use Adobe Express for presentations that allow students to view information delivered in class and Padlet for students to give critiques.",
          "themes": [
            "efficiency",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "In my Graphic Design 2 class our Window graphic design project has students working with other staff members for a design that they design and install giving them real world experience and use of technology.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI can create a positive impact with efficiency, but may create more of a reliance on it to complete the work as an ends to a means and not putting in the time and effort needed for a quality result.",
          "themes": [
            "barriers"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "My students create a photo composite by hand and one with AI and compare the differences.",
          "themes": [
            "skillLoss",
            "access"
          ],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "efficiency",
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 50,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 25,
        "aiConcern": 65,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 58.3,
        "digitalReadiness": 64.0,
        "mediaArtsReadiness": 91.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators,Collaboration with other teachers"
        ]
      },
      "openResponses": {},
      "themeSummary": {
        "allThemes": [],
        "codedResponseCount": 0
      }
    },
    {
      "state": "TX",
      "stateName": "Texas",
      "schoolType": "Public",
      "teachingBand": "Elementary",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": null,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 75.0,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 33.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "K-2",
          "3-5"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Limited support from school leadership or IT staff"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Support from school leadership or administrators,Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I feel my ability to be flexible and problem solve quickly stems from my experience working as an art installer for museums and galleries. Furthermore, I experimented with a wide variety of media and mediums while completing my BFA in painting. If they had offered the degree back then, I would have worked towards a…",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media art utilizes less traditional media such as video, gif animation, 3d printing. Media art seems to lie somewhere between CTE and Art",
          "themes": [
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Using digital student portfolios to have student reflect on their work. Seeing the variety of ways they would engage with the process.",
          "themes": [
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "3d printing. Letting them experience the modeling process to the end product.",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positively. Art Education seems to always be several steps behind. Art seems to question how phenomena such as AI impacts culture, however, it seems many art educators still used dated content or methods of art instruction",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "engagement",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 2
      }
    },
    {
      "state": "OR",
      "stateName": "Oregon",
      "schoolType": "Public",
      "teachingBand": "Middle",
      "experienceBand": "16-20 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": null,
        "standardsFamiliarity": null,
        "aiOpenness": 25,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 8.3,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 0.0
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": false
      },
      "lists": {
        "currentLevels": [
          "6-8"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "As the majority of educational learning currently involves technology, in my current art classes students only do hands-on creative projects.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Providing all assignments, and supporting materials in Google.Classroom provides all students access to information. I do this every day, for every assignment.",
          "themes": [
            "access"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positively, in regards to all kids having support to build upon for individual creativity. Negatively, many students will use AI as a crutch, and never develop their individual creativity.",
          "themes": [
            "access"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "skillLoss"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Private",
      "teachingBand": "High School",
      "experienceBand": "4-6 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Personal AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 75,
        "aiConcern": 100,
        "supportReadiness": 67,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 72.3,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can make the art-making process faster and more efficient",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to professional development on digital technologies, media arts, or AI,Collaboration with other teachers"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "5",
          "themes": [],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as the creative use of technology and digital tools to produce and communicate artistic works across various forms of media. This includes visual arts, audio, video, and interactive media, often combining elements of design and technology.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I use interactive digital storytelling tools to engage my student in a history project .By using this technology student were able to create and personalize approach to the project",
          "themes": [
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Empathy and awareness",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Increased access to art education and enhancing creativity",
          "themes": [
            "access"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "It was useful during introduction to AI and it generated AI from platforms",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "engagement",
          "making"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "GA",
      "stateName": "Georgia",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "No",
      "aiAttitudeBand": "Negative",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 0,
        "aiOpenness": 0,
        "aiRelevance": 0,
        "aiComfort": 0,
        "aiConcern": 100,
        "supportReadiness": 33,
        "mediaArtsBackgroundBinary": 0,
        "aiReadiness": 0.0,
        "digitalReadiness": 77.7,
        "mediaArtsReadiness": 16.7
      },
      "flags": {
        "usesAiForTeaching": false,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": false,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "Other (please specify)"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to technical support from IT staff"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "professional illustrator and digital artist",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "user-controlled media programs, NOT AI",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I teach and have taught the adobe suite, and continue to without the use of AI generative features",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI is negatively impacting art student mental health, confidence, and providing a delusional version of what constitutes an artistic experience. On top of that, there is the obvious moral and ethical issues of plagiarism, since there is no \"ethical\" AI database to generate from, every usage of generative AI platforms…",
          "themes": [
            "ethics"
          ],
          "stance": "negative"
        },
        "aiUseful": {
          "text": "I never will nor would because it doesn't help any artist, at any level, especially developing young artists. It simulates the valuable artistic processes we actually teach and provides only a crutch for creativity. AI does not belong in any educational setting that truly values the arts",
          "themes": [],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "ethics",
          "making"
        ],
        "codedResponseCount": 3
      }
    },
    {
      "state": "DE",
      "stateName": "Delaware",
      "schoolType": "Private",
      "teachingBand": "Multi-level",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Neutral",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 75,
        "standardsFamiliarity": 0,
        "aiOpenness": 50,
        "aiRelevance": 25,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 41.7,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 58.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "6-8",
          "9-12"
        ],
        "aiImpacts": [
          "It could hinder creativity by automating too much of the process"
        ],
        "supportChallenges": [
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "The workshops I have taken and lectures I've been to inspire me to learn more about topics, which led me down the path of creating new lesson plans.",
          "themes": [
            "creativity",
            "efficiency",
            "training"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "A combination of traditional and non-traditional media is used to create something new.",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Being able to show students examples, videos, and other artists (virtually visiting museums) had a huge impact.",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "Graphic design- logo project. Self-branding and marketing concepts. Students have to create a logo that represents themselves. After they learn the essential design elements, they can use AI to generate their idea and compare the differences.",
          "themes": [
            "creativity",
            "access",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Negatively. It can impact the creativity behind graphic design and Photoshop and make things accessible for the younger generation. It is a good tool to use occasionally but should not be abused. Some students will always take the shortcut and not learn how to do the task correctly.",
          "themes": [
            "skillLoss",
            "access",
            "making"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "See above.",
          "themes": [],
          "stance": "neutral"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "creativity",
          "efficiency",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 5
      }
    },
    {
      "state": "PA",
      "stateName": "Pennsylvania",
      "schoolType": "Charter",
      "teachingBand": "Other",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 50,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 100,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 83.3,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 66.7
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "Other (please specify)"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can help students with limited technical skills create art",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Limited support from school leadership or IT staff",
          "Budget constraints for purchasing technology"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My previous teaching experiences in both 1:1 brick-and-mortar schools and the cyber environment have significantly shaped my current teaching practices. In the physical classroom, I learned the value of personalized instruction and the importance of building strong relationships with students. That experience taught…",
          "themes": [
            "skillLoss",
            "access",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as creative works that combine various forms of digital and multimedia elements, such as photography, video, animation, sound design, graphic design, and interactive media. It bridges technology and traditional artistic expression, allowing artists to tell stories, communicate ideas, and…",
          "themes": [
            "creativity",
            "skillLoss",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Teaching in a 1:1 setting helped lower behavior issues because each lesson was scaffolded and students could work at their own pace, independently. I was able to multiply myself because I was able to do video recordings of my demonstrations. Before students would gather around my table and watch me, this created…",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "One year I collaborated with a high school media arts teacher. My intermediate students created their own monster characters and her high school students created animations with their submissions. My intermediate students loved seeing their drawings come to life!",
          "themes": [
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "AI has the potential to transform art education in both positive and challenging ways. On the positive side, AI can enhance creativity by generating ideas, offering personalized feedback, and providing students with access to advanced tools for digital art creation. It can democratize learning by making high-quality…",
          "themes": [
            "creativity",
            "efficiency",
            "ethics",
            "access",
            "training",
            "barriers",
            "making"
          ],
          "stance": "mixed"
        },
        "aiUseful": {
          "text": "Yes, I've found AI tools particularly useful for generating emails in my teaching practice. Crafting clear and professional communication with students and families is essential, and AI helps streamline this process. For example, when sending out reminders, meeting recaps, or project guidelines, I use AI to draft…",
          "themes": [
            "access",
            "barriers"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 6
      }
    },
    {
      "state": "OH",
      "stateName": "Ohio",
      "schoolType": "Other",
      "teachingBand": "High School",
      "experienceBand": "11-15 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Interested, not yet using",
      "scores": {
        "digitalIntegration": 100,
        "digitalConfidence": 100,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 100,
        "aiRelevance": 50,
        "aiComfort": 50,
        "aiConcern": 100,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 66.7,
        "digitalReadiness": 100.0,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": true,
        "teachesMediaArts": false,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities",
          "It can make the art-making process faster and more efficient",
          "It could hinder creativity by automating too much of the process",
          "It might lead to over-reliance on technology",
          "It may create ethical concerns about authorship and originality"
        ],
        "supportChallenges": [
          "Lack of access to necessary hardware or software",
          "Budget constraints for purchasing technology",
          "Difficulty finding time to integrate media arts or AI into the curriculum"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "I taught exclusively online for 7 years of my career, which impacts my willingness to use all technology in the class. However, I've always viewed it as a just another tool to use and not a crutch, even online. When online, students would do work with traditional art media just like in a 'regular' classroom setting.…",
          "themes": [
            "skillLoss"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts is the use of modern electronic technology to create art.",
          "themes": [],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "I taught a J-term (January Term; shorten interest-based classes) on digital art using Adobe Express. This was very engaging for the students, especially earning certifications from Adobe using the program tutorials. I also use presentations every day to present student lessons via Apple TV and Google Slides.",
          "themes": [
            "efficiency",
            "engagement",
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "In my Digital Art J-term course, students were able to earn certifications from Adobe which students then were so proud of they put it in their email signatures. I also used generative image AI on my art criticism essay lesson. Students put their Describe paragraph into a generator to see where the gaps were in their…",
          "themes": [
            "training",
            "making"
          ],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "I think that generative AI could pose problems in media arts based classes; right now it's easy to tell if they used it - but as technology improves it'll be harder and harder. Students also need explicit instruction on how to use it and when to use it. I had instances of students attempting to use it by plugging in…",
          "themes": [],
          "stance": "neutral"
        },
        "aiUseful": {
          "text": "Specifically in my art criticism essay it was useful to review their writing. We first plugged their Describe paragraph into a generative image AI to test if their writing really was descriptive. Then, later, they used the rubric I created and had ChatGPT give them feedback based on the rubric. I taught them…",
          "themes": [
            "efficiency"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "efficiency",
          "engagement",
          "making",
          "skillLoss",
          "training"
        ],
        "codedResponseCount": 4
      }
    },
    {
      "state": "CA",
      "stateName": "California",
      "schoolType": "Public",
      "teachingBand": "High School",
      "experienceBand": "7-10 years",
      "mediaArtsBackground": "Yes",
      "aiAttitudeBand": "Positive",
      "aiUsageStatus": "Active classroom AI use",
      "scores": {
        "digitalIntegration": 75,
        "digitalConfidence": 75,
        "mediaArtsAdoption": 50,
        "standardsFamiliarity": 100,
        "aiOpenness": 75,
        "aiRelevance": 75,
        "aiComfort": 75,
        "aiConcern": 65,
        "supportReadiness": 100,
        "mediaArtsBackgroundBinary": 100,
        "aiReadiness": 75.0,
        "digitalReadiness": 83.3,
        "mediaArtsReadiness": 83.3
      },
      "flags": {
        "usesAiForTeaching": true,
        "highEthicalConcern": false,
        "teachesMediaArts": true,
        "hasFormalMediaArtsBackground": true,
        "hasFormalTraining": true
      },
      "lists": {
        "currentLevels": [
          "9-12"
        ],
        "aiImpacts": [
          "It can enhance creativity by providing new tools and possibilities"
        ],
        "supportChallenges": [
          "Insufficient professional development or training opportunities",
          "I have not faced any challenges"
        ],
        "resourcesNeeded": [
          "Access to more technology (e.g., devices, software),Collaboration with other teachers,Clearer curriculum guidelines for integrating technology and media arts"
        ]
      },
      "openResponses": {
        "priorInfluence": {
          "text": "My previous teaching, educational, and professional experiences have significantly influenced my current teaching practices. During my early years as an educator, I learned the importance of differentiating instruction to meet the diverse needs of my students. This realization has led me to incorporate various…",
          "themes": [
            "access",
            "engagement"
          ],
          "stance": "not_scored"
        },
        "mediaDefinition": {
          "text": "Media arts can be defined as the creation, manipulation, and analysis of digital and electronic media. It encompasses a broad range of disciplines, including digital photography, graphic design, web design, video production, animation, sound design, game design, and 3D modeling, among others. Media arts involve the…",
          "themes": [
            "skillLoss",
            "engagement",
            "making"
          ],
          "stance": "not_scored"
        },
        "techEnhanced": {
          "text": "Last year, I incorporated a digital photography project into my art curriculum. Students were tasked with using their smartphones or digital cameras to capture images that represented their personal experiences and perspectives. They then used photo editing software to manipulate their images, experimenting with…",
          "themes": [
            "creativity",
            "skillLoss",
            "engagement",
            "barriers"
          ],
          "stance": "not_scored"
        },
        "mediaProject": {
          "text": "If you have used AI tools in your teaching, can you describe a specific project or lesson where it was particularly useful?",
          "themes": [],
          "stance": "not_scored"
        },
        "aiFuture": {
          "text": "Positive: Enhanced creativity: AI can help students explore new creative possibilities by suggesting unique combinations of materials, styles, and techniques that they may not have considered on their own. Personalized learning: AI can analyze each student's learning patterns, strengths, and weaknesses, and provide…",
          "themes": [
            "creativity",
            "efficiency",
            "skillLoss",
            "access",
            "engagement",
            "barriers"
          ],
          "stance": "positive"
        },
        "aiUseful": {
          "text": "In a graphic design class, I introduced students to a generative design tool powered by AI. The tool allowed students to create unique designs by inputting certain parameters, such as color schemes, shapes, and patterns. Students were then tasked with using the AI-generated designs as the basis for a series of…",
          "themes": [
            "ethics",
            "skillLoss",
            "access",
            "making"
          ],
          "stance": "positive"
        }
      },
      "themeSummary": {
        "allThemes": [
          "access",
          "barriers",
          "creativity",
          "efficiency",
          "engagement",
          "ethics",
          "making",
          "skillLoss"
        ],
        "codedResponseCount": 5
      }
    }
  ],
  "defaults": {
    "tab": "highlights",
    "compareMetric": "aiReadiness",
    "compareGroup": "teachingBand",
    "mapMetric": "aiReadiness",
    "textQuestion": "aiFuture",
    "theme": "creativity",
    "researchModel": "aiReadinessModel",
    "researchGroup": "teachingBand"
  }
};
