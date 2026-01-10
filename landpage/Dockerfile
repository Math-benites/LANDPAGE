FROM php:8.2-apache

# Install curl and required extensions.
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    libcurl4-openssl-dev \
    && docker-php-ext-install curl

# Enable mod_rewrite.
RUN a2enmod rewrite

WORKDIR /var/www/html
