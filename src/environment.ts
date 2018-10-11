const dev = {
  context: "http://ec2-35-153-210-251.compute-1.amazonaws.com:8888/"
};

const prod = {
  context: "http://ec2-35-153-210-251.compute-1.amazonaws.com:8888/"
};

export const environment = process.env.NODE_ENV === "production" ? prod : dev;
