FROM node:20

# Install system dependencies for node-canvas
RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN mkdir generated_pdfs
COPY package.json package-lock.json ./
 
RUN npm install

COPY . .
COPY fonts/AP-Regular.ttf /usr/share/fonts/truetype/AP-Regular.ttf
COPY fonts/AP-Bold.ttf /usr/share/fonts/truetype/AP-Bold.ttf
RUN fc-cache -fv

# CMD ["npm", "start"]
RUN npm run build
CMD ["node", "dist/src/app.js"]