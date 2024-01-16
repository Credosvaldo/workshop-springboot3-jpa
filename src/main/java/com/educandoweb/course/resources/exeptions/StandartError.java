package com.educandoweb.course.resources.exeptions;

import java.io.Serializable;
import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StandartError implements Serializable {
    private Instant timeStamp;
    private Integer status;
    private String error;
    private String messge;
    private String path;

}
