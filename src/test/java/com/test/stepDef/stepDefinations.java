package com.test.stepDef;

import com.relevantcodes.extentreports.LogStatus;
//import com.test.hooks.Hooks;
//import com.test.resource.Resource;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import com.test.hooks.Hooks;
import com.test.resource.Resource;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import static io.restassured.RestAssured.given;

public class stepDefinations {

    Properties pr = new Properties();
    String responseBody;
    int StatusCode;
     Response res;
    String CityCheck;

    @Before
    public void readProperties() throws IOException {
        FileInputStream fi = new FileInputStream("src/main/resources/env.properties");
        pr.load(fi);
        System.out.println("Properties loaded");
    }

    @Given("^User is connected to Host$")
    public void user_is_connected_to_Host() throws Throwable {
        RestAssured.baseURI = pr.getProperty("HOST");
        Hooks.logger.log(LogStatus.INFO, " The HOST URL --> " + pr.getProperty("HOST"));
    }


    @Given("^User enters a \"([^\"]*)\" and \"([^\"]*)\" values$")
    public void user_enters_a_and_values(String Country, String ZipCode) throws Throwable {
        res = given().
                given().when().get(Resource.GetZipDetails(Country, ZipCode)).then().extract().response();
    }


    @Then("^User should get valid status response$")
    public void user_should_get_valid_status_response() throws Throwable {
        responseBody = res.asString();  //extract all body response as a String and store in responseBody
        StatusCode = res.getStatusCode(); // gets status code

        Hooks.verifyResult(StatusCode, responseBody);  // both value are parsed to verify class in hooks
        Hooks.SaveExtentReports();
        System.out.println("Test Closed");

    }

    /*
     * @@ City Details API Steps
     *
     */

    @And("^User enters a \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" values$")
    public void userEntersAAndAndValues(String Country, String State, String City) throws Throwable {
        res = given().
                given().when().get(Resource.GetCityDetailss(Country, State, City)).then().extract().response();

    }

}
