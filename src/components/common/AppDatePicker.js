import React from "react";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css'; // Import the flatpickr theme CSS
import 'flatpickr/dist/flatpickr.min.css'; 
const AppDatePicker = () => {

    return (
        <div>
            <Flatpickr
                options={{
                    altInput: true,
                    altFormat: 'F j, Y',
                    dateFormat: 'Y-m-d',
                }}
                className="w-full px-4 py-2 border rounded-md bg-transparent  text-white border-none outline-none active:outline-none"
            />
        </div>
    )
}

export default AppDatePicker;