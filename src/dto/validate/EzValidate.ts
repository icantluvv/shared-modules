import { validate } from 'class-validator';

export async function validateDTO<T extends object>(dto: T): Promise<void> {
    const errors = await validate(dto);
    if (errors.length > 0) {
        throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
    }
}
