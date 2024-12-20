import React from "react";
import ticket from "@/assets/images/ticket.png";

const BuyTickets = () => {
  return (
    <button
      className="buy-ticket-button flex items-center justify-center gap-2 
      w-[380px] h-[52px] mt-5 px-6 py-2 bg-red-600 text-white font-bold rounded-lg 
      hover:bg-red-700 transition
      sm:w-[300px] sm:h-[45px] sm:px-4 sm:py-2 sm:text-sm sm:gap-2 
      md:w-[340px] md:h-[48px] md:px-5 md:py-2 md:text-base md:gap-3 
      xs:w-[250px] xs:h-[40px] xs:px-3 xs:py-1 xs:text-xs xs:gap-1"
    >
      <img
        src={ticket}
        alt="Ticket icon"
        className="w-6 h-6 sm:w-5 sm:h-5 md:w-5 md:h-5"
      />
      <span>Купить билет</span>
    </button>
  );
};

export default BuyTickets;
