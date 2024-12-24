import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

interface ReservationFormProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  guests: number;
  setGuests: (guests: number) => void;
  reservations: Array<{
    date: string;
    time: string;
    guests: number;
    name: string;
    email: string;
    phone: string;
  }>;
  setReservations: React.Dispatch<React.SetStateAction<Array<{
    date: string;
    time: string;
    guests: number;
    name: string;
    email: string;
    phone: string;
  }>>>;
}

function ReservationForm({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  guests,
  setGuests,
  reservations,
  setReservations,
}: ReservationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }

    const newReservation = {
      date: selectedDate,
      time: selectedTime,
      guests,
      name,
      email,
      phone,
    };

    setReservations([...reservations, newReservation]);
    setSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setSelectedDate('');
    setSelectedTime('');
    setGuests(2);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Make a Reservation</h2>
      
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          Reservation submitted successfully!
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              min="1"
              max="10"
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;