import React, { useState } from 'react';
import { Calendar, Clock, Users, UtensilsCrossed } from 'lucide-react';
import ReservationForm from './components/ReservationForm';
import TimeSlots from './components/TimeSlots';
import Header from './components/Header';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [reservations, setReservations] = useState<Array<{
    date: string;
    time: string;
    guests: number;
    name: string;
    email: string;
    phone: string;
  }>>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <ReservationForm
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              guests={guests}
              setGuests={setGuests}
              reservations={reservations}
              setReservations={setReservations}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <TimeSlots
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              reservations={reservations}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;