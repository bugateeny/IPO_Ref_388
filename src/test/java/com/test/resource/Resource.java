package com.test.resource;
public class Resource 
{
	
		//post request resources
		public static String GetZipDetails(String city, String zip)
		{
			String res = "/"+city+"/"+zip+""; //   concatenate path param  to make it dynamic instead of hard coding  GET path param in step definition
			return res;
		}
		
		public static String GetCityDetailss(String country, String state, String city)
		{
			String res =  "/"+country+"/"+state+"/"+city+"";  //   concatenate path param  to make it dynamic instead of hard coding  GET path param in step definition
			return res;
		}
		
}
