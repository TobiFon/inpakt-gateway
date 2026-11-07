#!/bin/bash
set -e

echo "[1/4] Unlocking /etc/hosts (removing immutable flag)..."
python3 -c 'import fcntl, array; f=open("/etc/hosts"); a=array.array("L", [0]); fcntl.ioctl(f, 0x80086601, a); a[0] &= ~0x10; fcntl.ioctl(f, 0x40086602, a)'
echo "-> Unlocked!"

echo "[2/4] Restoring clean /etc/hosts..."
cat << 'HOSTS' > /etc/hosts
127.0.0.1       localhost
127.0.1.1       tobi
127.0.0.1       localhost.localdomain
::1             localhost
::1             ip6-localhost ip6-loopback
HOSTS
echo "-> /etc/hosts restored!"

echo "[3/4] Flushing DNS cache..."
resolvectl flush-caches 2>/dev/null || systemd-resolve --flush-caches 2>/dev/null || true
echo "-> DNS cache flushed!"

echo "[4/4] Reinstalling missing chattr tool..."
apt-get update && apt-get install -y --reinstall e2fsprogs

echo ""
echo "=== ALL SITES UNBLOCKED SUCCESSFULLY! ==="
