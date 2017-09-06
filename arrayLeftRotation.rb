#!/bin/ruby

# n,k = gets.strip.split(' ')
# n = n.to_i
# k = k.to_i
# a = gets.strip
# a = a.split(' ').map(&:to_i)

k = 2
a = [1,2,3,4,5]

k.times do |index|
  item = a.shift
  a.push(item)
end

puts a.join(' ') 
