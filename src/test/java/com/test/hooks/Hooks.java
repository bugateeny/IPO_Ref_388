package com.test.hooks;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import java.text.DateFormat;
import java.util.Date;

public class Hooks 
{
	
	public static String IsConsoleErrorSave="Yes";
	
	public static DateFormat format =new java.text.SimpleDateFormat("_yyyy-MMM-dd_hh-mm");
	public static Date date=new Date();
	public static String Execution_Time =format.format(date);
	
	
	public static ExtentReports extent=new ExtentReports(System.getProperty("user.dir")+"\\ExtentReports\\Log_"+Hooks.Execution_Time+".html");
	public static ExtentTest logger=extent.startTest("API Test Results");

	

	public static void SaveExtentReports() 
	{
		extent.flush();
		extent.endTest(logger);
		
	}
	
	
	public static void verifyResult(int StatusCode, String responseBody)
	{

		if(StatusCode == 200)
		{
			Hooks.logger.log(LogStatus.PASS,"The Response Code is --> "+StatusCode);
			Hooks.logger.log(LogStatus.PASS,"Response Body is -> "+ responseBody);	
		}
		else if(StatusCode == 404)
		{
			Hooks.logger.log(LogStatus.ERROR,"The Response Code is "+StatusCode+", Result Not Found or Bad Request");
		}
		else
		{
			Hooks.logger.log(LogStatus.FAIL, "Response code is: " + StatusCode);
		}
		
	}
	
}
