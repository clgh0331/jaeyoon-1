function Home() {




    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center'
        }}>
            <a href={"/tic-tae-toe"}>Tic Tae Toe</a>
            <a href={"/todo"}>To Do List</a>
        </div>
    );
}

export default Home;
