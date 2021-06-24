import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBookings} from '../../store/booking'


export default function Booking() {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking.bookings);
    console.log('bookingState😎', bookingState)

    useEffect(() => {
        dispatch(fetchBookings())
    },[dispatch])

    return (
        <div>
            {bookingState && Object.values(bookingState).map(booking => {
                return (
                    <div>{booking.start_date} </div>
                )
})}
        </div>
    )
}