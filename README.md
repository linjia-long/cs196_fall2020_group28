# Mining for Bias Website
## Background
**Problem**: Articles that attempt to feed you a particular narrative/contain bias.

**Solution**: Take an article and use sentiment analysis to output an evaluation of the bias in the article based on its content and any accompanying image(s).

## Building the Project
This project was developed on [React](https://reactjs.org/) using React Hooks and Parallax and implemented Flask.


#### Setting up Flask 
Download Flask by running the following line of code in your Terminal:
```
pip install Flask
```
For more information on Flask installation, go to [https://flask.palletsprojects.com/en/1.1.x/installation/](https://flask.palletsprojects.com/en/1.1.x/installation/.]


#### Running the Project
First, open your Terminal or Command-Line and navigate to the my-app project. Then, type the following code to prepare the Flask app:
```
export FLASK_APP=test.py
flask run
```
Next, open the “my-app” project in VSCode and open a Terminal window. Type the following code to run the React app:
```
npm start
```

## Usage
Paste a news article URL into the URL textbox and click on the “Start” button to receive your subjectivity score. The lower the percentage, the less bias there is in the article.

