#!/bin/bash

sudo ifconfig wlan0 10.0.0.1 netmask 255.255.255.0

sudo hostapd -B /etc/hostapd/hostapd.conf



udhcpd -f udhcpd.conf

node dns_srv.js

