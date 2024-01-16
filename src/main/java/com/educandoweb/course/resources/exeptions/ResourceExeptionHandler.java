package com.educandoweb.course.resources.exeptions;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.educandoweb.course.services.exeptions.ResourceNotFoundExeption;

import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResourceExeptionHandler {

    @ExceptionHandler(ResourceNotFoundExeption.class)
    public ResponseEntity<StandartError> resourceNotFound(ResourceNotFoundExeption e, HttpServletRequest request) {
        String error = "Reource not found";
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;
        StandartError err = new StandartError(Instant.now(), httpStatus.value(), error, e.getMessage(), request.getRequestURI());

        return ResponseEntity.status(httpStatus).body(err);
    }
}
