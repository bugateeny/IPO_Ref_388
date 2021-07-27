$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/test.feature");
formatter.feature({
  "line": 1,
  "name": "API Automation FrameWork Test",
  "description": "",
  "id": "api-automation-framework-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate GET call for Zip Code Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UsZip"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters a \"\u003cCOUNTRY\u003e\" and \"\u003cZIPCODE\u003e\" values",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;",
  "rows": [
    {
      "cells": [
        "COUNTRY",
        "ZIPCODE"
      ],
      "line": 12,
      "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;1"
    },
    {
      "cells": [
        "us",
        "90210"
      ],
      "line": 13,
      "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;2"
    },
    {
      "cells": [
        "ca",
        "A0A"
      ],
      "line": 14,
      "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;3"
    },
    {
      "cells": [
        "us",
        "234"
      ],
      "line": 15,
      "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 958200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate GET call for Zip Code Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UsZip"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters a \"us\" and \"90210\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 1857652200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 15
    },
    {
      "val": "90210",
      "offset": 24
    }
  ],
  "location": "stepDefinations.user_enters_a_and_values(String,String)"
});
formatter.result({
  "duration": 3456385700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 348898600,
  "status": "passed"
});
formatter.before({
  "duration": 815100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate GET call for Zip Code Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UsZip"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters a \"ca\" and \"A0A\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 88100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ca",
      "offset": 15
    },
    {
      "val": "A0A",
      "offset": 24
    }
  ],
  "location": "stepDefinations.user_enters_a_and_values(String,String)"
});
formatter.result({
  "duration": 226675900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 336702700,
  "status": "passed"
});
formatter.before({
  "duration": 19500200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate GET call for Zip Code Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-zip-code-details-in-united-states;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UsZip"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters a \"us\" and \"234\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 331400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 15
    },
    {
      "val": "234",
      "offset": 24
    }
  ],
  "location": "stepDefinations.user_enters_a_and_values(String,String)"
});
formatter.result({
  "duration": 417125400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 431626000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate GET call for City Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@UsCity"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters a \"\u003cCOUNTRY\u003e\" and \"\u003cSTATE\u003e\" and \"\u003cCITY\u003e\" values",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;",
  "rows": [
    {
      "cells": [
        "COUNTRY",
        "STATE",
        "CITY"
      ],
      "line": 26,
      "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;1"
    },
    {
      "cells": [
        "us",
        "ma",
        "belmont"
      ],
      "line": 27,
      "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;2"
    },
    {
      "cells": [
        "us",
        "ca",
        "belmontt"
      ],
      "line": 28,
      "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;3"
    },
    {
      "cells": [
        "us",
        "ma",
        "belmont"
      ],
      "line": 29,
      "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5683700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate GET call for City Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@UsCity"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters a \"us\" and \"ma\" and \"belmont\" values",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 161300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 15
    },
    {
      "val": "ma",
      "offset": 24
    },
    {
      "val": "belmont",
      "offset": 33
    }
  ],
  "location": "stepDefinations.userEntersAAndAndValues(String,String,String)"
});
formatter.result({
  "duration": 332109400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 151323000,
  "status": "passed"
});
formatter.before({
  "duration": 2346900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate GET call for City Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@UsCity"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters a \"us\" and \"ca\" and \"belmontt\" values",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 176100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 15
    },
    {
      "val": "ca",
      "offset": 24
    },
    {
      "val": "belmontt",
      "offset": 33
    }
  ],
  "location": "stepDefinations.userEntersAAndAndValues(String,String,String)"
});
formatter.result({
  "duration": 378570400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 357086000,
  "status": "passed"
});
formatter.before({
  "duration": 7896500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate GET call for City Details in United States",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-city-details-in-united-states;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@UsCity"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters a \"us\" and \"ma\" and \"belmont\" values",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 183100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 15
    },
    {
      "val": "ma",
      "offset": 24
    },
    {
      "val": "belmont",
      "offset": 33
    }
  ],
  "location": "stepDefinations.userEntersAAndAndValues(String,String,String)"
});
formatter.result({
  "duration": 303129200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 147012900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Validate GET call for Post-Code Details in Great Britain",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GbPostC"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters a \"\u003cCOUNTRY\u003e\" and \"\u003cPOSTCODE\u003e\" values",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;",
  "rows": [
    {
      "cells": [
        "COUNTRY",
        "POSTCODE"
      ],
      "line": 41,
      "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;1"
    },
    {
      "cells": [
        "gb",
        "WV1"
      ],
      "line": 42,
      "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;2"
    },
    {
      "cells": [
        "gb",
        "AB1"
      ],
      "line": 43,
      "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;3"
    },
    {
      "cells": [
        "us",
        "90210"
      ],
      "line": 44,
      "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11260900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate GET call for Post-Code Details in Great Britain",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GbPostC"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters a \"gb\" and \"WV1\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 280400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gb",
      "offset": 15
    },
    {
      "val": "WV1",
      "offset": 24
    }
  ],
  "location": "stepDefinations.user_enters_a_and_values(String,String)"
});
formatter.result({
  "duration": 323059800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 241179000,
  "status": "passed"
});
formatter.before({
  "duration": 22467500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate GET call for Post-Code Details in Great Britain",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GbPostC"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters a \"gb\" and \"AB1\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gb",
      "offset": 15
    },
    {
      "val": "AB1",
      "offset": 24
    }
  ],
  "location": "stepDefinations.user_enters_a_and_values(String,String)"
});
formatter.result({
  "duration": 275625200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 218471900,
  "status": "passed"
});
formatter.before({
  "duration": 5993900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate GET call for Post-Code Details in Great Britain",
  "description": "",
  "id": "api-automation-framework-test;validate-get-call-for-post-code-details-in-great-britain;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GbPostC"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is connected to Host",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters a \"us\" and \"90210\" values",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should get valid status response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.user_is_connected_to_Host()"
});
formatter.result({
  "duration": 947700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 15
    },
    {
      "val": "90210",
      "offset": 24
    }
  ],
  "location": "stepDefinations.user_enters_a_and_values(String,String)"
});
formatter.result({
  "duration": 268226600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinations.user_should_get_valid_status_response()"
});
formatter.result({
  "duration": 202187300,
  "status": "passed"
});
});