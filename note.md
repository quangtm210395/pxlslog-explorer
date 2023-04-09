connect to db and run
```
select time as date, x, y, color as color_index, undo_action as action
from pixels
order by time asc;
```
then export the data to csv file. use it with `generate_log.js` script to generate log and run command below to export the video
step = number of second in 1 frame
cargo run render --src sanit.log --step 3000000 --size 1000 1000 --color 255 255 255 0 | ffmpeg -f rawvideo -pixel_format rgba -video_size 1000x1000 -i pipe:0  dist/video.mp4