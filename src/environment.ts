const dev = {
  context: "http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/"
};

const prod = {
  context: "http://ec2-18-191-67-157.us-east-2.compute.amazonaws.com:8087/"
};

export const environment = process.env.NODE_ENV === "production" ? prod : dev;
