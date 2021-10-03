import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

type ReservationCardTypes = {
  name: string;
  index: number;
};

function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <div
      className='reservation-card-container'
      onClick={() => dispatch(removeReservation(index))}
    >
      {name}
    </div>
  );
}

export default ReservationCard;
