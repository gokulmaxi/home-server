const express = require("express");
const app = express();
app.get("/",async(req,res)=>{
    res.json({
        floors: [
          {
            floorName: 'Floor1',
            rooms: [
              {
                roomId: 'room1',
                roomIcon: 'kitchen',
                roomStatus: true,
                switchBoards: [
                  {
                    switchBoardId: 'board1',
                    switches: [
                      {
                        switchName: 'Fan1',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'Fan2',
                        switchType: 'Fan',
                        switchState: false,
                      },
                      {
                        switchName: 'light1',
                        switchType: 'light',
                        switchState: true,
                      },
                    ],
                  },
                  {
                    switchBoardId: 'board2',
                    switches: [
                      {
                        switchName: 'Fan1',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'Fan2',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'light1',
                        switchType: 'light',
                        switchState: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            floorName: 'Floor2',
            rooms: [
              {
                roomId: 'room1',
                roomIcon: 'kitchen',
                roomStatus: true,
                switchBoards: [
                  {
                    switchBoardId: 'board1',
                    switches: [
                      {
                        switchName: 'Fan1',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'Fan2',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'light1',
                        switchType: 'light',
                        switchState: true,
                      },
                    ],
                  },
                  {
                    switchBoardId: 'board2',
                    switches: [
                      {
                        switchName: 'Fan1',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'Fan2',
                        switchType: 'Fan',
                        switchState: true,
                      },
                      {
                        switchName: 'light1',
                        switchType: 'light',
                        switchState: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
})
// start listening to the server
app.listen(4200, () =>
  console.log(`server has started at port 4200`)
);
