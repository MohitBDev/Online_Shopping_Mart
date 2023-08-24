# Use an OpenJDK base image for building
FROM maven:3.8.1-openjdk-11 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the source code to the container
COPY . .

# Build the backend application using Maven


RUN mvn clean install -DskipTests


# Use a lightweight OpenJDK base image for the runtime image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the compiled JAR file from the builder stage
COPY target/Ecommerce-Backend-0.0.1-SNAPSHOT.jar  /app/Ecommerce-Backend-0.0.1-SNAPSHOT.jar

# Expose the port that the Spring Boot app listens on
EXPOSE 9096

# Run the Spring Boot application
CMD ["java", "-jar", "Ecommerce-Backend-0.0.1-SNAPSHOT.jar"]

