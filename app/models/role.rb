class Role < ActiveRecord::Base

  Role.pluck(:name).map(&:downcase).each do |action|
    define_method("#{action}?") do
     self.name.downcase == action
    end
  end

end
