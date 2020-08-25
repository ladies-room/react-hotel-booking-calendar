ec2:
https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#Instances:sort=instanceId

https://hub.docker.com/repository/create

mysql docker;
https://www.evernote.com/shard/s460/client/snv?noteGuid=862aad9f-3f53-c5c9-158e-275bcb71327f&noteKey=f119996b2ed6fc946e6e8806d8e7d366&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs460%2Fsh%2F862aad9f-3f53-c5c9-158e-275bcb71327f%2Ff119996b2ed6fc946e6e8806d8e7d366&title=Mysql%2BDocker

proxy ec2
https://www.evernote.com/shard/s460/client/snv?noteGuid=162e0b6b-e8c8-56c1-9d17-b26cde656068&noteKey=d3d4ee87fe9ae8d7f2a8d88fa281dd04&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs460%2Fsh%2F162e0b6b-e8c8-56c1-9d17-b26cde656068%2Fd3d4ee87fe9ae8d7f2a8d88fa281dd04&title=Proxy%2BEC2

minji seeding mysql docker
https://docs.google.com/document/d/1t3bAW77KomK5QRDvyYES_tro9_nkmPQ0t4RuJbtVmyc/edit

minji docker aws
https://docs.google.com/document/d/1JjYAuc_ebaiYXTYVajkmI5MrnF10mb02cUBnvDXwSa4/edit

calendar:
http://3.17.161.89:2046/

proxy:
http://13.59.152.68:3000/

It would not be ideal in the industry to say that you are making a mock-up of some existing app. Thus, don’t mention that you are implementing “Airbnb” - instead say property listing application, etc.
Don’t talk about it as if it is a school project (or that you were “practicing” FE skills)

- instead, talk about it as if it’s an actual professional application. talk about something more interesting for the engineers to hear (talk more about your logic implementation on calendar).

# INTRO:
I was working on a property listing application with a team of engineers, user can see the detials of the listing including images, location, avaliable dates for booking, i was working on the calendar module which allows user to pick the date they potentially want to stay at that listing and shows the total price for those given dates, it will filter out the dates that are already booked by other users, and the minimum dates you havee to book for that listing;

# Challenge:
One of the interesting chanlleneg I ran into while working on this application is coming up with the logic for the calendar, In each month table, there are weeks, in weeks there are days, and for each calendar table of that month, I also need to consider dates from the previous month, and the month following.

I started by finding the first sunday of the current month minue one week to get the previous week that will also have to be rendered in the current month calendar, I created a while loop for it to go on untill the dates are no longer the current month's date, then for everyweeks, there is another loop that's created for the days.

It sounds pretty straight forward but the actual implementation is not that easy, I had to apply conditonal to the dates that's being rendered, filter out the ones that's not current month; dates that are booked; and normal unbookd dates;

# last:
Through doing this project, other than the logic for the calendar I also learned the pros and cons of CSS modules and react styled components. I have been really enjoying writing styled components,

the best practice I would recommend to myself, or to other people is, to start the project early, don't be afraid to spent time on laying out the skeleton of the whole app before coding, and that can avoid a lot of back and forth;
