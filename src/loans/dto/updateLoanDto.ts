import { PartialType } from "@nestjs/mapped-types";
import { createLoanDto } from "./createLoanDto";

export class updateLoanDto extends PartialType(createLoanDto){
    
}