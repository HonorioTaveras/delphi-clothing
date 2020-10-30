# What image do you want to start building on?
FROM node:14.2.0

# Make a folder in your image where your app's source code can live
RUN mkdir -p /delphiClothing

# Tell your container where your app's source code will live
WORKDIR /delphiClothing

# What source code do you want to copy, and where to put it?
COPY . /delphiClothing

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3456

# How do you start your app?
CMD [ "npm", "run", "start" ]
