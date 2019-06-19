package com.jatin.rest.webservices.restfulwebservices.helloWorld;

import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class HelloWorldController {
    @RequestMapping(method = GET, path = "/hello-world")
    @CrossOrigin(origins = "http://localhost:4200")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping( path = "/hello-world-bean")
    @CrossOrigin(origins = "http://localhost:4200")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("hello world bean");
    }
    @GetMapping( path = "/hello-world-bean/{name}")
    @CrossOrigin(origins = "http://localhost:4200")
    public HelloWorldBean helloWorldBean(@PathVariable  String name) {

      // throw new  RuntimeException("Something went wrong");
        return new HelloWorldBean(String.format("hello world %s",name));
    }
}
