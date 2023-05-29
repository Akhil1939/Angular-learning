export interface Rooms {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;

}

export interface roomList{
    roomType: string;
    roomNumber: number;
    roomPrice: number;
    photo: string;
    checkInTime: Date;
}