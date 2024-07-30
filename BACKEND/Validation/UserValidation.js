import { z } from 'zod';

const UserSchema = z.object({
    name: z.string()
        .min(3, "Name must be at least 3 characters long")
        .max(30, "Name should not exceed 30 characters"),

    email: z.string().email("Invalid email address"),

    password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .max(15, "Password should not exceed 15 characters "),

    address: z.string()
        .min(6, "Address must be at least 6 characters long")
        .max(100, "Address should not exceed 100 characters"),

    phone: z.string()
        .min(10, "Phone number must be at least 10 characters long")
        .max(14, "Phone number should not exceed 14 characters"),

    bloodgroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
});

export default UserSchema;
