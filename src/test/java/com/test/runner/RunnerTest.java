package com.test.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/*
 * 
 * @@@@ USING J-Unit Runner Class
 * 
 * *
 */
@RunWith(Cucumber.class)
@CucumberOptions(features={"src/main/resources/features/test.feature"},
				 monochrome=true,
				 glue={"com.test.stepDef"},
				 tags= {"@UsZip,@UsCity,@GbPostC"},
				 plugin = {"pretty","html:target/Reports","json:target/cucumber.json"})

 
public class RunnerTest
{

}

