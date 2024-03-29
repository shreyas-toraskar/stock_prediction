<<<<<<< HEAD
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pandas_datareader as webb
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import yfinance as web
from IPython.display import Image
import matplotlib.dates as mdates
import seaborn as sns
import mplfinance as mpf
import warnings
warnings.filterwarnings("ignore")
from keras.models import load_model
import streamlit as st


st.title("Stock Trend Prediction")

st.subheader("Enter start Date")
start =st.text_input("", '2010-01-01')
st.subheader("Enter end Date")
end =st.text_input("",'2022-01-01')



user_input=st.text_input("Enter Stock Ticker","AMZN")
df = web.download(user_input, start=start, end=end)


#Describing Data
st.subheader("Data From 2010-2019")
st.write(df.describe())


#Visualaizations
st.subheader("Closing Price vs Time Chart")
fig = plt.figure(figsize = (12,6))
plt.plot(df.Close)
st.pyplot(fig)

st.subheader("Closing Price vs Time Chart with 100MA & 200MA")
ma100 = df.Close.rolling(100).mean()
ma200 = df.Close.rolling(200).mean()
fig = plt.figure(figsize = (12,6))
plt.plot(ma100)
plt.plot(ma200)
plt.plot(df.Close)
st.pyplot(fig)


# spliting data 
data_train = pd.DataFrame(df['Close'][0:int(len(df)*0.70)])
data_test = pd.DataFrame(df['Close'][int(len(df)*0.70):int(len(df))])
print("Train data",data_train.shape)
print("Test data",data_test.shape)


# scaling the data
from sklearn.preprocessing import MinMaxScaler
scale = MinMaxScaler(feature_range=(0,1))


train_array = scale.fit_transform(data_train)

#Spllitig data into x_train and y_train
x_train=[]
y_train=[]

for i in range(100,train_array.shape[0]):
    x_train.append(train_array[i-100:i])
    y_train.append(train_array[i,0])
    
x_train,y_train = np.array(x_train),np.array(y_train)

#load my model
model = load_model('prediction_model.h5')


=======
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pandas_datareader as webb
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import yfinance as web
from IPython.display import Image
import matplotlib.dates as mdates
import seaborn as sns
import mplfinance as mpf
import warnings
warnings.filterwarnings("ignore")
from keras.models import load_model
import streamlit as st


st.title("Stock Trend Prediction")

st.subheader("Enter start Date")
start =st.text_input("", '2010-01-01')
st.subheader("Enter end Date")
end =st.text_input("",'2022-01-01')



user_input=st.text_input("Enter Stock Ticker","AMZN")
df = web.download(user_input, start=start, end=end)


#Describing Data
st.subheader("Data From 2010-2019")
st.write(df.describe())


#Visualaizations
st.subheader("Closing Price vs Time Chart")
fig = plt.figure(figsize = (12,6))
plt.plot(df.Close)
st.pyplot(fig)

st.subheader("Closing Price vs Time Chart with 100MA & 200MA")
ma100 = df.Close.rolling(100).mean()
ma200 = df.Close.rolling(200).mean()
fig = plt.figure(figsize = (12,6))
plt.plot(ma100)
plt.plot(ma200)
plt.plot(df.Close)
st.pyplot(fig)


# spliting data 
data_train = pd.DataFrame(df['Close'][0:int(len(df)*0.70)])
data_test = pd.DataFrame(df['Close'][int(len(df)*0.70):int(len(df))])
print("Train data",data_train.shape)
print("Test data",data_test.shape)


# scaling the data
from sklearn.preprocessing import MinMaxScaler
scale = MinMaxScaler(feature_range=(0,1))


train_array = scale.fit_transform(data_train)

#Spllitig data into x_train and y_train
x_train=[]
y_train=[]

for i in range(100,train_array.shape[0]):
    x_train.append(train_array[i-100:i])
    y_train.append(train_array[i,0])
    
x_train,y_train = np.array(x_train),np.array(y_train)

#load my model
model = load_model('prediction_model.h5')


>>>>>>> 0973c3f5711c0548bca2927a743781b419fcc80c
