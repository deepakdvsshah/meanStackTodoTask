import { ApiProperty } from '@nestjs/swagger';
export class TaskObj {
    @ApiProperty()
    description: string;
    @ApiProperty()
    reminder: string;
    @ApiProperty()
    due: string;
    @ApiProperty()
    category: string;
}