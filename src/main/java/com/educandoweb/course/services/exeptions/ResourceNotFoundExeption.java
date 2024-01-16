package com.educandoweb.course.services.exeptions;

public class ResourceNotFoundExeption extends RuntimeException {

    public ResourceNotFoundExeption(Object id) {
        super("Resource not found. Id: " + id);
    }
}
