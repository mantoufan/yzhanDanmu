FROM php:5.5-apache
RUN echo "deb http://mirrors.163.com/debian/ jessie main non-free contrib\n\
deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib\n\
deb http://mirrors.163.com/debian/ jessie-backports main non-free contrib\n\
deb-src http://mirrors.163.com/debian/ jessie main non-free contrib\n\
deb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib\n\
deb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib\n\
deb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib\n\
deb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib\n\
" > /etc/apt/sources.list
RUN apt-get -y update && apt-get -y --force-yes install dpkg-dev debhelper
RUN apt-get -y build-dep pure-ftpd
RUN mkdir /tmp/pure-ftpd/ && \
	cd /tmp/pure-ftpd/ && \
	apt-get source pure-ftpd && \
	cd pure-ftpd-* && \
	sed -i '/^optflags=/ s/$/ --without-capabilities/g' ./debian/rules && \
	dpkg-buildpackage -b -uc
RUN dpkg -i /tmp/pure-ftpd/pure-ftpd-common*.deb
RUN apt-get -y install wget && wget -O /usr/local/etc/php/php.ini https://raw.githubusercontent.com/php/php-src/master/php.ini-production && echo "extension=imagick.so" >> /usr/local/etc/php/php.ini
RUN apt-get install -y zlib1g-dev && docker-php-ext-install zip
RUN apt-get -y install openbsd-inetd vim wget git ImageMagick libmagick++-dev
RUN pecl install imagick
RUN dpkg -i /tmp/pure-ftpd/pure-ftpd_*.deb
RUN apt-mark hold pure-ftpd pure-ftpd-common
RUN useradd -M -U -s /usr/sbin/nologin -d /var/www ftp
RUN chmod 777 /var/www/html
RUN echo '/usr/sbin/nologin' >> /etc/shells
RUN ln -s /etc/pure-ftpd/conf/PureDB /etc/pure-ftpd/auth/50pure
RUN echo "pure-pw useradd mhjlw -u ftp -g ftp -d /var/www/html <<!\n\
1991925\n\
1991925\n\
!" > tmp.sh
RUN sh tmp.sh && rm tmp.sh 
RUN pure-pw mkdb
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN git clone git://github.com/mhjlw/EvaThumber.git && mv EvaThumber p 
RUN cd p && composer install
RUN sed 's/'GD'/'Imagick'/' p/config.default.php > p/config.local.php && a2enmod rewrite
RUN apt-get install ffmpeg -y && git clone https://github.com/mhjlw/PHP-FFMpeg.git
RUN mv PHP-FFMpeg v && cd v && composer install && cd ..
RUN apt-get install libopencv-dev python-opencv -y
RUN git clone https://github.com/mhjlw/OpenCV-for-PHP.git && mv OpenCV-for-PHP o && cd o && phpize && ./configure && make && ln /dev/null /dev/raw1394 && make test
RUN mv o/modules/opencv.so /usr/local/lib/php/extensions/no-debug-non-zts-20121212 && echo "extension=opencv.so" >> /usr/local/etc/php/php.ini && cd ..
RUN chmod 777 p/upload && wget http://cn2.php.net/get/php-5.5.31.tar.gz/from/this/mirror && tar xf mirror
RUN cd php-5.5.31/ext/ftp && phpize && ./configure --with-php-config='/usr/local/bin/php-config' && make && make install && echo "extension=ftp.so" >> /usr/local/etc/php/php.ini
RUN rm -r php-5.5.31 && rm -r mirror
RUN wget https://raw.githubusercontent.com/mhjlw/up/master/log.php && chmod 777 log.php
