## Ubuntu Server: Start / Stop / Restart

### Start Ubuntu Server

If your HP is completely powered off:

1. Press the **Power button**.
2. Wait for Ubuntu to boot.
3. If you get a login screen, enter your username and password.
4. After login, you'll see something like:

```text
tej@tej:~$
```

That's your terminal prompt.

If you're using Ubuntu Server without a graphical desktop, this terminal is where you'll do most administration.

### Lock the screen

```bash
Ctrl+Alt+L
```

### Log out

```bash
exit
```

If you're in an SSH session, `exit` disconnects you from the server.

### Restart Ubuntu

```bash
sudo reboot
```

### Shut down completely

```bash
sudo poweroff
```

or:

```bash
sudo shutdown now
```

**Don't just pull the power cable** while Ubuntu is running. Use `poweroff` or `shutdown`.

---

# Your Wi-Fi Commands

Your Wi-Fi interface is:

```text
wlp2s0
```

### See network status

```bash
nmcli device
```

### See available Wi-Fi networks

```bash
nmcli device wifi list
```

### Connect to Wi-Fi

```bash
nmcli device wifi connect "WIFI_NAME" password "<YOUR_PASSWORD>"
```

Example:

```bash
nmcli device wifi connect "TEJ_Mesh" password "<YOUR_PASSWORD>"
```

### Switch to another Wi-Fi

First see saved networks:

```bash
nmcli connection show
```

Then:

```bash
nmcli connection up "OTHER_WIFI"
```

For example:

```bash
nmcli connection up "TEJ_OP_5G"
```

That's the main command you'll use to **switch Wi-Fi**.

### Disconnect Wi-Fi

```bash
nmcli device disconnect wlp2s0
```

### Turn Wi-Fi off

```bash
sudo nmcli radio wifi off
```

### Turn Wi-Fi back on

```bash
sudo nmcli radio wifi on
```

### Forget a Wi-Fi network

```bash
sudo nmcli connection delete "WIFI_NAME"
```

---

# Ethernet ↔ Wi-Fi

See which interfaces are connected:

```bash
nmcli device
```

You might see:

```text
DEVICE   TYPE      STATE
wlp2s0   wifi      connected
enp3s0   ethernet  connected
```

Your Ethernet interface might have a different name.

### Disconnect Ethernet

Replace `enp3s0` with whatever your `nmcli device` shows:

```bash
nmcli device disconnect enp3s0
```

### Disconnect Wi-Fi

```bash
nmcli device disconnect wlp2s0
```

### Connect Ethernet

```bash
nmcli device connect enp3s0
```

### See active connections

```bash
nmcli connection show --active
```

---

# Check Whether Internet Works

First:

```bash
nmcli device
```

Then:

```bash
ping -c 4 8.8.8.8
```

Then:

```bash
ping -c 4 google.com
```

If you get:

```text
64 bytes from ...
```

your connection is working.

Stop a continuous `ping` with:

```text
Ctrl+C
```

---

# If Wi-Fi Stops Working

Run these **in order**:

```bash
nmcli device
```

```bash
sudo nmcli radio wifi on
```

```bash
nmcli device wifi list
```

Then connect:

```bash
nmcli device wifi connect "WIFI_NAME" password "<YOUR_PASSWORD>"
```

Check:

```bash
nmcli device
```

Then:

```bash
ping -c 4 google.com
```

---

# Check Your IP Address

```bash
ip -br addr
```

or:

```bash
hostname -I
```

You'll see something similar to:

```text
192.168.1.25
```

That's the local IP address other devices on your network can use to reach the server.

---

# Important Network Commands

```bash
ip link
```

Shows network interfaces.

```bash
ip addr
```

Shows IP addresses.

```bash
ip route
```

Shows how traffic is routed.

```bash
resolvectl status
```

Shows DNS information.

```bash
systemctl status NetworkManager
```

Checks NetworkManager.

Restart NetworkManager:

```bash
sudo systemctl restart NetworkManager
```

---

# Software Installation

Update package information:

```bash
sudo apt update
```

Install software:

```bash
sudo apt install PACKAGE_NAME
```

Upgrade Ubuntu packages:

```bash
sudo apt upgrade
```

Remove software:

```bash
sudo apt remove PACKAGE_NAME
```

Search:

```bash
apt search PACKAGE_NAME
```

If packages are broken:

```bash
sudo apt --fix-broken install
```

---

# Files and Folders

```bash
pwd
```

Where am I?

```bash
ls -la
```

What's here?

```bash
cd folder
```

Enter a folder.

```bash
cd ..
```

Go back one folder.

```bash
cd ~
```

Go to your home directory.

Create folder:

```bash
mkdir myfolder
```

Create file:

```bash
touch file.txt
```

Read file:

```bash
cat file.txt
```

Edit file:

```bash
nano file.txt
```

Copy:

```bash
cp file.txt backup.txt
```

Rename/move:

```bash
mv old.txt new.txt
```

Delete:

```bash
rm file.txt
```

## Be very careful with:

```bash
rm -r
```

It can delete an entire directory and its contents.

---

# Users

See your username:

```bash
whoami
```

See user information:

```bash
id
```

Create a user:

```bash
sudo adduser username
```

Change your password:

```bash
passwd
```

Add a user to administrators:

```bash
sudo usermod -aG sudo username
```

Check logged-in users:

```bash
who
```

---

# `sudo`

`sudo` allows an ordinary administrator account to perform an administrative command.

Example:

```bash
sudo apt update
```

When Ubuntu asks for your password, **nothing will appear while you type it**. That's normal.

Don't share your password with anyone.

---

# System Information

Ubuntu version:

```bash
lsb_release -a
```

Kernel:

```bash
uname -a
```

CPU:

```bash
lscpu
```

RAM:

```bash
free -h
```

Disk:

```bash
df -h
```

Disks:

```bash
lsblk
```

Hostname:

```bash
hostname
```

---

# Services

Check a service:

```bash
systemctl status SERVICE
```

Start:

```bash
sudo systemctl start SERVICE
```

Stop:

```bash
sudo systemctl stop SERVICE
```

Restart:

```bash
sudo systemctl restart SERVICE
```

Start automatically when Ubuntu boots:

```bash
sudo systemctl enable SERVICE
```

For example:

```bash
systemctl status NetworkManager
```

---

# SSH — Control Ubuntu From Another Computer

Install:

```bash
sudo apt install openssh-server
```

Check:

```bash
sudo systemctl status ssh
```

Find your server IP:

```bash
hostname -I
```

From another computer:

```bash
ssh tej@SERVER_IP
```

For example:

```bash
ssh tej@192.168.1.25
```

When finished:

```bash
exit
```

---

# Firewall

Check:

```bash
sudo ufw status
```

Enable:

```bash
sudo ufw enable
```

If you're remotely connected through SSH, allow SSH **before** enabling the firewall:

```bash
sudo ufw allow ssh
```

Allow HTTP:

```bash
sudo ufw allow 80/tcp
```

Allow HTTPS:

```bash
sudo ufw allow 443/tcp
```

See numbered rules:

```bash
sudo ufw status numbered
```

---

# Processes

See running programs:

```bash
ps aux
```

Interactive monitor:

```bash
top
```

Exit `top`:

```text
q
```

Find a process:

```bash
ps aux | grep NAME
```

Stop a process:

```bash
kill PID
```

---

# Logs

Recent system logs:

```bash
journalctl -n 50
```

Follow logs live:

```bash
journalctl -f
```

NetworkManager logs:

```bash
journalctl -u NetworkManager
```

SSH logs:

```bash
journalctl -u ssh
```

---

# Very Useful Daily Commands

You don't need to memorize everything. Start with these:

```bash
pwd
ls -la
cd
nano
sudo
apt
systemctl
nmcli
ip
ping
ssh
df -h
free -h
top
journalctl
```

## Your Wi-Fi mini-cheatsheet

If you forget everything else, remember this:

```bash
# Check Wi-Fi
nmcli device

# Scan
nmcli device wifi list

# Connect
nmcli device wifi connect "WIFI_NAME" password "<YOUR_PASSWORD>"

# See saved networks
nmcli connection show

# Switch Wi-Fi
nmcli connection up "WIFI_NAME"

# Disconnect Wi-Fi
nmcli device disconnect wlp2s0

# Turn Wi-Fi on
sudo nmcli radio wifi on

# Turn Wi-Fi off
sudo nmcli radio wifi off

# Test Internet
ping -c 4 google.com
```

### Commands to treat with extra care

Never run these just because someone tells you to without understanding what they do:

```bash
rm -rf
dd
mkfs
fdisk
chmod -R
chown -R
sudo rm
```

They can cause **permanent data loss or system problems**.
