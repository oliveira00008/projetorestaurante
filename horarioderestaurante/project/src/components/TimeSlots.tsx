import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotsProps {
  selectedDate: string;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  reservations: Array<{
    date: string;
    time: string;
    guests: number;
    name: string;
    email: string;
    phone: string;
  }>;
}

function TimeSlots({
  selectedDate,
  selectedTime,
  setSelectedTime,
  reservations,
}: TimeSlotsProps) {
  const timeSlots = [
    '11:00', '11:30',
    '12:00', '12:30',
    '13:00', '13:30',
    '14:00', '14:30',
    '18:00', '18:30',
    '19:00', '19:30',
    '20:00', '20:30',
    '21:00', '21:30'
  ];

  const isTimeSlotAvailable = (time: string) => {
    return !reservations.some(
      reservation => 
        reservation.date === selectedDate && 
        reservation.time === time
    );
  };

  if (!selectedDate) {
    return (
      <div className="text-center py-8">
        <Clock className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-gray-600">Please select a date to see available time slots</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Available Time Slots</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {timeSlots.map((time) => {
          const isAvailable = isTimeSlotAvailable(time);
          return (
            <button
              key={time}
              onClick={() => isAvailable && setSelectedTime(time)}
              className={`
                p-2 rounded-md text-center transition duration-200
                ${isAvailable
                  ? selectedTime === time
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white border border-gray-300 hover:border-indigo-500'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
              disabled={!isAvailable}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TimeSlots;