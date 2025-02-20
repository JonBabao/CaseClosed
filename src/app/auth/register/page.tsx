import MainLayout from "@/app/components/layouts/MainLayout";
import Register from "@/app/components/Register";
import React, { useState } from 'react';

export default function RegisterPage() {
    return(
        <MainLayout>
            <Register />
        </MainLayout>
    );
}
