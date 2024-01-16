package com.educandoweb.course.services.exeptions;

public class DataBaseExeption extends RuntimeException {
    
    public DataBaseExeption(String msg) {
        super(msg);
    }
    
}
