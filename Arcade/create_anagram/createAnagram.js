function createAnagram(s, t) {
    s.split('').forEach(el=>t=t.replace(el,''));
    return t.length;
}
