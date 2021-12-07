const LandingPage =  ({ currentUser, tickets }) => {
    const ticketList = tickets.map((ticket) => {
        return (
          <tr key={ticket.id}>
            <td>{ticket.title}</td>
            <td>{ticket.price}</td>
            <td>
              <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                <a>보기</a>
              </Link>
            </td>
          </tr>
        );
      });
    
    return (
        <div>
          <h1>Tickets</h1>
          <table className="table">
            <thead>
              <tr>
                <th>제목</th>
                <th>가격</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>{ticketList}</tbody>
          </table>
        </div>
      );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
    const { data } = await client.get('/api/tickets');

    return { tickets: data };
};

export default LandingPage;