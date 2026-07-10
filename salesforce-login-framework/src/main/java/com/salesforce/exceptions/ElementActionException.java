package com.salesforce.exceptions;

public class ElementActionException extends RuntimeException {
    public ElementActionException(String pageName, String action, Throwable cause) {
        super("[" + pageName + "] Failed to " + action + " — " + cause.getMessage(), cause);
    }
}
