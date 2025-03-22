import { useState } from "react";

const StadiumSeatMap = () => {
    const rows = 8;
    const seatsPerRow = 12;
    const seatSize = 30;
    const gap = 10;
    
    const [selectedSeats, setSelectedSeats] = useState(new Set());

    const toggleSeat = (row: number, seat: number) => {
        const seatId = `${row}-${seat}`;
        setSelectedSeats(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(seatId)) {
                newSelection.delete(seatId);
            } else {
                newSelection.add(seatId);
            }
            return newSelection;
        });
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Stadium Seat Selection</h2>
            <svg width={seatsPerRow * (seatSize + gap)} height={(rows + 1) * (seatSize + gap)}>
                {/* Stage */}
                <rect x={0} y={0} width={seatsPerRow * (seatSize + gap)} height={50} fill="black" />
                <text x={seatsPerRow * (seatSize + gap) / 2} y={30} textAnchor="middle" fill="white" fontSize="20">Stage</text>
                
                {/* Seats */}
                {Array.from({ length: rows }).map((_, rowIdx) => (
                    Array.from({ length: seatsPerRow }).map((_, seatIdx) => {
                        const x = seatIdx * (seatSize + gap);
                        const y = (rowIdx + 1) * (seatSize + gap);
                        const seatId = `${rowIdx}-${seatIdx}`;
                        const isSelected = selectedSeats.has(seatId);
                        return (
                            <rect
                                key={seatId}
                                x={x}
                                y={y}
                                width={seatSize}
                                height={seatSize}
                                rx={5}
                                fill={isSelected ? "#4CAF50" : "#ccc"}
                                stroke="black"
                                strokeWidth={1}
                                onClick={() => toggleSeat(rowIdx, seatIdx)}
                                className="cursor-pointer hover:fill-gray-400"
                            />
                        );
                    })
                ))}
            </svg>
        </div>
    );
};

export default StadiumSeatMap;
