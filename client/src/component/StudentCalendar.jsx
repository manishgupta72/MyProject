import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Badge, Calendar } from "antd";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
const StudentCalendar = ({ card, setInfo }) => {
  const { user } = useAuth();
  const [attendance, setattendance] = useState([]);

  const getAllAttendance = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SOME_KEY}/api/admin/attendance/${card}`,
        {
          method: "GET",
        }
      );
      const ATdata = await response.json();
      console.log(`attendance ${ATdata}`);
      setattendance(ATdata.date);
      setInfo({
        tclass: new Date().getDate()-2,
        present: ATdata.date.length,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllAttendance();
  }, []);
  const dateCellRender = (value) => {
    const listData = attendance;
    return (
      <ul className="events">
        {listData &&
          listData.map((item) =>
            value.format("DD-MM-YYYY") == item ? (
              <Badge
                style={{ fontWeight: "bold", color: "green" }}
                key={item}
                status="success"
                text="PRESENT"
              />
            ) : (
              ""
            )
          )}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };
  return (
    <div>
      <Calendar cellRender={cellRender} />
    </div>
  );
};

export default StudentCalendar;

// for (let index = 0; index <= attendance.length; index++) {
//   console.log(index);
//

// }
