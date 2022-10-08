import styled from "styled-components";


export default function TicketMain({showtimes}) {

  return (
    <>
      {showtimes.map((item)=><button>{item.name}</button>)}
    </>
  );
}
