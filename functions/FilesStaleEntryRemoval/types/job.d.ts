/**
 * This is a utility file with the type declaration of the job function parameters
 */

/**
 * Type of the Job Request object. Contains the required details of the current job.
 */
export interface JobRequest {
    /**
     * @returns Current project details
     */
    getProjectDetails: () => Record<string, unknown>;
    /**
     * @returns Details of the current job
     */
    getJobDetails: () => Record<string, unknown>;
    /**
     * @returns Meta details of the current job
     */
    getJobMetaDetails: () => Record<string, unknown>;
    /**
     * @returns Job pool details of the current job
     */
    getJobpoolDetails: () => Record<string, unknown>;
    /**
     * @returns Capacity attributes of the current job
     */
    getJobCapacityAttributes: () => Record<string, string | number>;
    /**
     * 
     * @returns All parameters passed to the job function
     */
    getAllJobParams: () => Record<string, string>;
    /**
     * @param key Name of the job param
     * @returns Value of the job param
     */
    getJobParam: (key: string) => string | undefined;
}

/**
 * Type of the context object. This object is used to initialize the Catalyst sdk
 */
export interface Context extends Record<string, unknown> {
    /**
     * Contains the necessary headers to initialize the sdk
     */
    catalystHeaders: Record<string, string | number>;
    /**
     * @returns Maximum allowed execution time of the function
     */
    getMaxExecutionTimeMs: () => number;
    /**
     * This values is the difference between time Maximum execution time and the current time
     * @returns Remaining execution time of the function
     */
    getRemainingExecutionTimeMs: () => number;
    /**
     * Conclude the function execution with a success response
     */
    closeWithSuccess: () => void;
    /**
     * Conclude the function execution with a failure response
     */
    closeWithFailure: () => void;
}
