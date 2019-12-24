#step:1
1) When creating new screen use BaseContainer Component (Ex: <BaseContainer/>)
Note: want to change the Background Color use bgColor as props and pass values(Ex: bgColor:'white')

#Step:2
For Header use CommonHeader Component(Ex: <CommonHeader/>) 
1)If header have only karmaLogo and KARMA in leftside no need to pass any props
2)If header have Backbutton and Back in leftside send(leftIconName and title) props
3)If header have Backbutton, Back in leftside  and logo in center send(leftIconName,title,centerLogo) props

Note: want to change the Background Color use headerBgColor as props and pass values(Ex: headerBgColor:'white')

#step:3
For Title of Screen use CommonStatusBar(Ex: <CommonStatusBar title="KARMA"/>)

1)If rightside button is search/popup, send props like (rightIcon='search/popup')

Note: want to change the Background Color use bgColor as props and pass values(Ex: bgColor:'white')



