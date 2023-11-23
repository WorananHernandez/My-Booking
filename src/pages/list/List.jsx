import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="text">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="text">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyy"
              )} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="text">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOpenText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOpenInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOpenText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOpenInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="isOpenText">adult</span>
                  <input
                    type="number"
                    min={1}
                    className="isOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="isOptionItem">
                  <span className="isOpenText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="isOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="isOptionItem">
                  <span className="isOpenText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="isOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
