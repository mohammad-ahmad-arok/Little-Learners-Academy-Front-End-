import { useEffect, useState } from "react";
import { Room } from "./Room";
import { RoomTitles } from "./RoomsTitles";
// import imag from "../../assets/academics/Image1.jpg";
import SectionHeader from "../SectionHeader/SectionHeader";

export type RoomType = {
  name: string;
  description: string;
  images: string[];
  _id: string;
};

const Rooms = () => {
  const [roomSelected, setroomSelected] = useState<string>("All");
  const [rooms, setrooms] = useState<RoomType[]>([]);

  useEffect(() => {
    // fetch api to get all rooms
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/rooms"
    )
      .then((response) => response.json())
      .then((data) => {
        setrooms(data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    // get data by room's id
    if (roomSelected != "All") {
      fetch(
        `https://little-learners-academy-back-end-j3iu.onrender.com/api/rooms/${roomSelected}`
      )
        .then((response) => response.json())
        .then((data) => {
          setrooms([data.data]);
        })
        .catch((error) => console.error("Error:", error));
    } else {
      fetch(
        `https://little-learners-academy-back-end-j3iu.onrender.com/api/rooms`
      )
        .then((response) => response.json())
        .then((data) => {
          setrooms(data.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [roomSelected]);

  return (
    <div
      className=" mx-[auto] w-[91.79vw] xl:w-[88.89vw] 2xl:[94.79] 
          flex flex-col mb-[80%] md:mb-[20%] xl:mb-[15%]"
    >
      <SectionHeader
        title="Our Rooms Gallery"
        supTitle="Our Gallery"
        para="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <div className="allRooms w-[100%] py-10 sm:py-[6.3rem] pb-32">
        <RoomTitles
          roomSelected={roomSelected}
          setroomSelected={setroomSelected}
        />
        <div className="flex flex-col gap-[400px]">
          {rooms.map((item, index) => {
            return <Room key={index} room={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
