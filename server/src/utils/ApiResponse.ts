export class ApiResponse<D> {
    public success: boolean;

    constructor(
        public statuscode: number,
        public message: string,
        public data?: D,
    ) {
        this.statuscode = statuscode;
        this.message = message;
        this.success = statuscode < 400;
    }
}
